const clone  = require('git-clone')
const rimraf = require('rimraf')
const ncp = require('ncp')
const tmp = require('tmp')

/**
 * gitCopy
 * 
 * @param {Object} params
 * @param {string} params.repoUrl - URL of git repository to copy
 * @param {string} params.source - Specific path in repository to copy
 * @param {string} params.destination - Destination path
 * @param {function} params.onFinish - Callback function when finsihes
 */

module.exports = (repoUrl, source, destination, onFinish) => {
  let tmpObj
  try {
    tmpObj = tmp.dirSync()
    clone(repoUrl, `${tmpObj.name}`, [], () => {
      rimraf.sync(`${tmpObj.name}/.git`)

      ncp(`${tmpObj.name}${source || '/./'}`, destination || '/./', (err) => {
        if (err) {
          throw new Error(err)
        }
        
        if (onFinish) {
          onFinish()
        }
       })
    })
  } catch (err) {
    console.error(err)
  } finally {
    tmpObj.removeCallback()
  }
}