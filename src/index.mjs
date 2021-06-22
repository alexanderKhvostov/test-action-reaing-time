import core from '@actions/core'
// import { writeFile } from 'fs'
// import { promisify } from 'util'

// import { updateManifestRoutes, fetchDocsManifest } from './manifestHelpers.mjs'
// import calculateRoutesReadingTime from './calculateRoutesReadingTime.mjs'
import getFiles from './getFiles.mjs'

// const manifestPath = `/docs/manifest.json`

// const writeFileAsync = promisify(writeFile)

async function run() {
  try {
    core.info(`Starting Markdown reading time ...`)
    core.debug('token', process.env.GITHUB_TOKEN)
    const files = getFiles()
    // Debug log the payload.
    core.debug(`Payload keys: ${JSON.stringify(files)}`)
    // const routesWithReadingTime = await calculateRoutesReadingTime(
    //   manifest.routes
    // )
    // // Debug log the payload.
    // core.debug(`Payload keys: ${Object.keys(manifest)}`)

    // const newManifest = await updateManifestRoutes(
    //   manifest,
    //   routesWithReadingTime
    // )
    // await writeFileAsync(manifestPath, newManifest)
    // toDo find the way to rewrite manifest.json
  } catch (error) {
    core.error(error)
    core.setFailed(error.message)
  }
}

run()
