
# Contributing

<a name="development" id="development"></a>
## Development and contributing setup

These instructions explain how to develop the cloudgov style while using it on another (companion) site. This allows to see the result of the style changes on an actual site.

0. Ensure node/npm is installed. To ensure you're using the most recent version of node that this project supports, use [nvm](https://github.com/creationix/nvm).
0. Run `git clone git@github.com:18F/cg-style.git cloudgov-style` if you haven't done so already.
0. Enter the project directory with `cd cloudgov-style`.
0. If using **nvm**, run `nvm use`. Otherwise, try and install the node version that is in `.nvmrc`.
0. Run `npm install` in the `cloudgov-style` repo.
0. Run `npm run build` in the `cloudgov-style` repo.
0. In the *cloudgov-style* repo, link the current module by running `npm link` in the root of the repo.
0. In the companion site repo, link the *cloudgov-style* repo by running `npm link cloudgov-style` in the root of the repo.

   - Confirm that the cg-style folder exists in `node_modules` folder.

0. In the *cloudgov-style* repo, watch the files and continually build by running `npm install && npm run watch`.
0. If developing cg-style with either `cg-dashboard` or `cg-site`, run `npm run watch` in that project directory.
If using cg-style on a new project or a project that isn't already using cg-style:

0. In the companion site repo, import cg style into the main sass file: `@import "../node_modules/cloudgov-style/css/cg_style.scss";`.
0. In the companion site repo, run sass to build the *cg-style* repo into the css. This is best done through a script in package.json: `"build": "node-sass static_src/main.scss static/css/main.css"`

When writing styling code, make changes in the *cloudgov-style* repo, run `npm run watch` in the *cloudgov-style* repo, run `npm run build` in the companion site repo, and changes should be built. Alternatively, both repos have a watch task which can be run with `npm run watch` to allow changes to propegate automatically.

## Coding style

There is a coding standards document that dictates standards and suggestions for how to write code: [documentation/frontend_standards.md](documentation/frontend_standards.md).

Run `npm run lint` to lint the codebase for style problems.

When developing new components for the style library, ensure you add component documentation in `docs/src/components`.

## [WIP] Running cloud.gov pattern library locally
The Cloud.gov pattern library leverages Fractal, a static site framework for building and documenting component libraries. Here are some instructions to view the library locally:

First, you'll perform a build step to create the site and test the build process:

```sh
npm run build-library
```

Now you can run you local server by running the following command:

```sh
npm run start
```

To see changes as you're developing, ensure you're watching for file changes and building them automatically by running watch in a new terminal:

```sh
npm run watch-library
```

Go to `localhost:3000` in your browser and you should be viewing a local instance of the Cloud.gov pattern library. The `--sync` flag indicates that you would like Fractal to watch any changes you make. When your file is saved, Fractal will reload the site automatically and you will be able to view those changes.

Happy developing!
