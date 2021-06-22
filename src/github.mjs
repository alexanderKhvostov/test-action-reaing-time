import fetch from 'node-fetch'
const RAW_GITHUB_URL = 'https://raw.githubusercontent.com'

function getErrorText(res) {
  try {
    return res.text()
  } catch (err) {
    return res.statusText
  }
}

async function getError(res, path) {
  const errorText = await getErrorText(res)
  const error = new Error(
    `GitHub raw download error (${path} - ${res.status}): ${errorText}`
  )

  error.status = res.status
  error.headers = res.headers.raw()

  return error
}

export async function getRawFileFromGitHub(path) {
  const options = {}
  if (process.env.GITHUB_TOKEN) {
    options.headers = {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
    }
  }
  // eslint-disable-next-line no-undef
  const res = await fetch(RAW_GITHUB_URL + path, options)
  if (res.ok) return res.text()
  throw await getError(res, path)
}

export async function getFile(file) {
  let rawUrl = file.replace(
    'https://github.com',
    'https://raw.githubusercontent.com'
  )
  rawUrl = rawUrl.replace('/raw/', '/')

  return {
    name: file.filename,
    content: await getRawFileFromGitHub(rawUrl)
  }
}
