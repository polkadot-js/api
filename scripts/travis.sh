#!/bin/bash
# ISC, Copyright 2017 Jaco Greeff

set -e

function setupGit () {
  REPO=$1

  echo "Setting up GitHub config for $REPO"

  git config push.default simple
  git config merge.ours.driver true
  git config user.name "Travis CI"
  git config user.email "$COMMIT_AUTHOR_EMAIL"
  git remote set-url origin https://${GH_TOKEN}@github.com/${REPO}.git > /dev/null 2>&1
}

echo "Running code checks & build"

npm run check
npm run build
npm run test
npm run ci:coveralls

# Pull requests and commits to other branches shouldn't try to deploy, just build to verify
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "master" ]; then
  echo "Branch check completed"

  exit 0
fi

setupGit ${TRAVIS_REPO_SLUG}

if [ -n "$(git status --untracked-files=no --porcelain)" ]; then
  echo "Adding build artifacts"

  git add .
  git commit -m "[CI Skip] Build artifacts"
fi

echo "Publishing to npm"

npm run ci:makeshift
npm --no-git-tag-version version
npm version patch -m "[CI Skip] Version bump"
npm publish

echo "Final push to GitHub"

git push --quiet origin HEAD:refs/heads/$TRAVIS_BRANCH > /dev/null 2>&1

echo "Release completed"

exit 0
