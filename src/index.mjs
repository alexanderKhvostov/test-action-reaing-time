import core, { setOutput } from '@actions/core'
import { writeFile, stat } from 'fs'
import { promisify } from 'util'
import { spawn } from 'child_process'
import path from 'path'

import calculateRoutesReadingTime from './calculateRoutesReadingTime.mjs'
import getFile from './getFile.mjs'

const writeFileAsync = promisify(writeFile)
const statAsync = promisify(stat)

const exec = (cmd, args = []) =>
  new Promise((resolve, reject) => {
    console.log(`Started: ${cmd} ${args.join(' ')}`)
    const app = spawn(cmd, args, { stdio: 'inherit' })
    app.on('close', (code) => {
      if (code !== 0) {
        let err = new Error(`Invalid status code: ${code}`)
        err.code = code
        return reject(err)
      }
      return resolve(code)
    })
    app.on('error', reject)
  })

async function run() {
  try {
    const docsFolder = core.getInput('docs_folder_name')
    const manifestPath = `${docsFolder}/manifest.json`
    const buffer = await getFile(manifestPath)
    const manifest = await JSON.parse(buffer.toString())

    const routesWithReadingTime = await calculateRoutesReadingTime(
      manifest.routes
    )

    const newManifest = JSON.stringify({
      ...manifest,
      routes: routesWithReadingTime
    })

    await writeFileAsync(manifestPath, newManifest)
    const statResult = await statAsync(manifestPath)
    setOutput('size', `${statResult.size}`)
    // eslint-disable-next-line no-undef
    await exec('bash', [path.join(__dirname, './start.sh')])
  } catch (error) {
    core.error(error)
    core.setFailed(error.message)
  }
}

run()
