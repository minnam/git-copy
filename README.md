# git-copy
Copy git repository without initializing git

## Why copy instead of clone?
----
Your reusuable code in previous projects needs more work before packaging or you just need to duplicate small modules

## API
----
> Caution: .git folder in the repository is removed before copying to your destination
### Command Line
#### Copy repository to specified destination
    npx git-copy [URL_TO_GIT_REPO] [PATH_TO_DESTINATION]

#### Copy part of repository to specified destination
    npx git-copy [URL_TO_GIT_REPO] [PATH_TO_SRC] [PATH_TO_DESTINATION]

### In Node.js
    const gitCopy = require('./index.js')

    gitCopy({ 
      repoUrl: 'https://github.com/minnam/bbng',
      source: '/examples/',
      destination: `${__dirname}/test`,
      onFinish: () => {
        console.log('Done!')
      }
    })

## Contact
Min Nam [[hi@minnam.io](mailto:hi@minnam.io) ]
