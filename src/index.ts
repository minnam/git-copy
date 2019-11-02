#!/usr/bin/env node
var clone = require('git-clone')
const params = process.argv.slice(2);

try {
  if (params.length < 1 || params.length > 3) {
    let errorMessage = 'Insufficient arguments.\n\n'
    errorMessage    += 'git-clone [GIT_REPO_URL] [DESTINATION]\n'
    errorMessage    += 'git-clone [GIT_REPO_URL] [GIT_SPECIFIC_PATH] [DESTINATION]\n'

    throw new Error(errorMessage)
  }

  const repoUrl = params[0]

  if (params.length == 2) {
    const destination = params[1]
    clone(repoUrl, './tmp/', [], () => {
      console.log('yes')
    })

  } else if (params.length = 3) {
    const destination = params[2]
  }    

} catch (e) {
  console.error(e)
}

