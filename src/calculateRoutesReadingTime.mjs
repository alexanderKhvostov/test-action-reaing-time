import readingTime from 'reading-time'
import getFile from './getFile.mjs'

export async function countReadingTimeByContent(path) {
  const content = await getFile(path.substring(1))
  return readingTime(content.toString())
}

export default async function addReadingTimeToRoutes(routes) {
  return await Promise.all(
    routes.map(async (route) => {
      if (route.routes) {
        const routes = await addReadingTimeToRoutes(route.routes)
        return { ...route, routes }
      }
      const { text, minutes, words } = await countReadingTimeByContent(
        route.path
      )
      return {
        ...route,
        readingTime: {
          text: text.replace('read', '').trim(),
          minutes,
          words
        }
      }
    })
  )
}
