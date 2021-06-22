import core from '@actions/core'
import github from '@actions/github'
import { getFile } from './github.mjs'
import globToRegExp from 'glob-to-regexp'

export default async function getFiles() {
  const context = github.context
  const includes = core.getInput('includes')
  const excludes = core.getInput('excludes')

  const octokit = github.getOctokit(
    process.env.GITHUB_TOKEN || process.env.TOKEN
  )
  const { data: list } = await octokit.pulls.listFiles({
    ...context.repo
  })

  const mdx = list.filter((f) => {
    const reIncluded = globToRegExp(includes, { extended: true })
    const reExcluded = globToRegExp(excludes, { extended: true })

    return (
      reIncluded.test(f.filename) === true &&
      reExcluded.test(f.filename) === false
    )
  })

  const filePromises = mdx.map(getFile)
  return Promise.all(filePromises)
}
