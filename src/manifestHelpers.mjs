import { getFile } from './github.mjs'
import core from '@actions/core'

export async function fetchDocsManifest(path) {
  core.info(path)
  const res = await getFile(path)
  return JSON.parse(res)
}

export async function updateManifestRoutes(manifest, routes) {
  return JSON.stringify({
    ...manifest,
    routes: routes
  })
}
