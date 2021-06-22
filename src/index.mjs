import core from '@actions/core'
import { writeFile } from 'fs'
import { promisify } from 'util'

import { updateManifestRoutes, fetchDocsManifest } from './manifestHelpers.mjs'
import calculateRoutesReadingTime from './calculateRoutesReadingTime.mjs'

const manifestPath = `/docs/manifest.json`

const writeFileAsync = promisify(writeFile)

async function run() {
  try {
    core.info(`Starting Markdown reading time ...`)
    const { content: manifest } = await fetchDocsManifest(manifestPath)
    const routesWithReadingTime = await calculateRoutesReadingTime(
      manifest.routes
    )

    const newManifest = await updateManifestRoutes(
      manifest,
      routesWithReadingTime
    )
    console.log(newManifest)
    await writeFileAsync(manifestPath, newManifest)
    // toDo find the way to rewrite manifest.json
  } catch (error) {
    core.error(error)
    core.setFailed(error.message)
  }
}

run()
