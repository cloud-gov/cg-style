# Release
Follow the steps outlined in this document to release a new version of `cloudgov-style`.

### Blah blah
- Releases should follow [semantic versioning](http://semver.org/).
- The Github tags for the release should just be the number, no `v` before.

## Steps

### Preparation
1. Decide on a "main idea" for the release, what the release is being done for. Look at previous releases for examples.
2. Decide on whether the release should be a patch, minor or major version update, based on semver.
3. Create a new release on the Github Releases page.
  1. Title the release with `{version number} - {main idea}`.
  2. Use the tag version of the release version number.
  3. Write a list of changes for the release.
  4. Create a link titled `Changelog` that uses the Github compare url to compare the current release tag with the last, such as `/compare/0.3.4...0.4.0`.

### Npm something
1. Ensure the `master` branch is up to date with all code to release.
2. Checkout a new `release-x.x` branch with the major and minor numbers of the new release version number.
  - This release branch should have all the changes to be put into the release.
  - This branch should be cut from `master`.
3. Update the `package.json` version number to the release version number.
4. Commit the changes to the package.json file.
5. Tag the commit with the release version number in the following format: `git tag -a x.x.x -m 'vx.x.x - Main idea of release`.
6. Push the release branch to github.

### Ruby gem something
1. On the release branch, build the gem by running `npm run gem`.
2. In the `./gem` directory create a branch for the release.
3. Update the version number in `lib/cloudgov-style/version.rb` to the release version number.
4. Tag the commit with the release version number in the following format: `git tag -a x.x.x -m 'vx.x.x - Main idea of release`.
5. Commit the changes and push the branch with the tags.

### blahblah
1. Merge the main cg-style release branch to `master`.
  - Ensure the travis build successfully completes and the new version is deployed to npm.
2. Merge the `cg-style-gem` release branch to `master`.
  - Ensure the travis build successfully completes and the new version is deployed to rubygems.
