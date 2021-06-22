import readingTime from 'reading-time'
import { getFile } from './github.mjs'

export default function (routes) {
  return routes.map((mainRoute) => {
    return {
      ...mainRoute,
      routes: mainRoute.routes.map(async (subRoute) => {
        const { content } = await getFile(subRoute.path)
        return { ...subRoute, readingTime: readingTime(content) }
      })
    }
  })
}
