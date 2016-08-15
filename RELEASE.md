# Releasing cloudgov-style
Follow the steps outlined in this document to release a new version of `cloudgov-style`.

## Principles
- Releases should follow [semantic versioning](http://semver.org/).
- The Github tags for the release should just be the number, no `v` before.
- The project will be pushed to [npm](https://www.npmjs.com/package/cloudgov-style) and [RubyGems](https://rubygems.org/gems/cloudgov-style).

## Steps
0. Decide on a "main idea" for the release, what the release is being done for. Look at previous releases for examples.
0. Decide on whether the release should be a patch, minor or major version update, based on [semver](http://semver.org/#summary).
0. Run `npm run release`. Provide the version number you decided on from above and the "main idea" when prompted. Try and keep it short and sweet, say under 60 characters. If you are curious, here is more [documentation](#how-the-release-script-works) about what the `release` script is doing.
0. There will now be tags in both the [18f/cg-style](https://github.com/18F/cg-style/tags) and [18f/cg-style-gem](https://github.com/18F/cg-style-gem/tags) repos. Edit the tag you just created and provide a bit more context for the release. Make sure to clearly articulate what has changed and why. Create a link titled `Changelog` that uses the Github compare url to compare the current release tag with the last, such as `/compare/0.3.4...0.4.0`.
0. Open pull requests in both repos from the release branch back into `master`. Remember, the version number should be the only thing that changed.
0. When the PR is merged, Travis notices that there is a tag on the commit and publishes the node module and ruby gem.

### How the release script works
Automation is important, and following checklists is hard so this script should do most of the work for you. `npm run release` simply calls `/scripts/release.js`.

The script does the following things in order:

0. Prompt you for the new release version number and main idea.
0. Update the `package.json` with the version number from above.
0. Checkout the `master` branch and cut a release branch from there. The release branch name will be the version number preceded by "release-".
0. Commit the `package.json` version bump.
0. Tag that commit with a tag that is just the release version.
0. Push that branch and tag to Github.

It also handles updating [18f/cg-style-gem](/18f/cg-style-gem) by executing the following steps:

0. While on the release branch, build the gem by running `npm run gem`.
0. Update `lib/cloudgov-style/version.rb` with the release version number.
0. Cut a new release branch from the `master` branch of the gem repo. The release branch name will be the version number preceded by "release-".
0. Commit the `version.rb` version bump.
0. Tag the commit.
0. Push the branch and tag to Github.
