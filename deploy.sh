#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy with vuepress script'
git push -f https://github.com/ruzun88/ruzun88.github.io.git master:deploy

cd -