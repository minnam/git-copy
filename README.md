# git-copy
Copy git repository to given destination without initializing git

## Why copy instead of clone?
- Your reusuable code in different project needs more work before packaging
- You need specific modules from a repository

## Examples
### Copying whole repository to specified destination
    npx git-copy [URL_TO_GIT_REPO] [PATH_TO_DESTINATION]

### Copying certain path of repository to specified destination
    npx git-copy [URL_TO_GIT_REPO] [PATH_TO_SRC] [PATH_TO_DESTINATION]
