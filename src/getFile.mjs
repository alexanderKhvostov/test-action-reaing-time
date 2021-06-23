import { readFile } from 'fs'
import { promisify } from 'util'

const readFileAsync = promisify(readFile)

export default async function getFile(path) {
  const fileContent = await readFileAsync(path)
  return fileContent
}
