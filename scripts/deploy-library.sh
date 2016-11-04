#!/bin/bash

set -o errexit
set -o pipefail

function on_exit () {
  local exit_code=$?
  if [[ ${exit_code} -ne 0 ]]; then
    echo "Error deploying pages" >&2
  fi

  exit $exit_code
}

trap on_exit EXIT

destination_repo=${1:-${GITHUB_REPO}}
build_dir=docs/build
target=18f-pages

# Git init
cd $build_dir
git --version
git init
git config user.name "Continuous deploy script"
git config user.email "deploy@example.com"
git add .
git commit -m "Deploy to pages"
# Force push from the current directory to the remote repo's target branch.
# (All previous history on the target branch will be lost, since we are
# overwriting it.) We redirect any output to /dev/null to hide any sensitive
# credential data that might otherwise be exposed.
git push --force --quiet "ssh://git@github.com/${destination_repo}.git" master:${target} > /dev/null 2>&1
