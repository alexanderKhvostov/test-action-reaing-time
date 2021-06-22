import { getFile } from './github.mjs'

export async function fetchDocsManifest(path) {
  const res = await getFile(path)
  return JSON.parse(res)
}

export async function updateManifestRoutes(manifest, routes) {
  return JSON.stringify({
    ...manifest,
    routes: routes
  })
}
