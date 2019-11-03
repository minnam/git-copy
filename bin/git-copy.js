#!/usr/bin/env node
const gitCopy = require('../src/')

const params =process.argv.slice(2)
let repoUrl
let source
let dest = process.cwd()

if (params.length === 0) {
  let errorMessage = 'Usage: git-copy [repo-url]\n'
  errorMessage    += '       git-copy [repo-url] [destination]\n'
  errorMessage    += '       git-copy [repo-url] [source] [destination]'
  console.error(errorMessage)

  process.exit()
}

if (params.length === 1) {
  repoUrl = params[0]
}

if (params.length === 2) {
  repoUrl = params[0]
  dest = params[1]
}

if (params.length === 3) {
  repoUrl = params[0]
  source = params[1]
  dest = params[2]
}

gitCopy(repoUrl, source, dest)