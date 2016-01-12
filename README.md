# cg-style
The global style of cloud.gov

## Dev setup
These instructions explain how to develop the cloudgov style while using it on
another (companion) site. This allows to see the result of the style changes
here on an actual cloud.gov site. This has already been started with [cg-docs](https://github.com/18F/cg-docs/tree/style-initial_setup).

0. Ensure npm is installed.

1. In the *cg-style* repo, link the current module by running `npm link` in the
   root of the repo.

2. In the companion site repo, link the *cg-style* repo by running `npm link
   cg-style` in the root of the repo.
   
   - Confirm that the cg-style folder exists in `node_modules` folder.

3. In the *cg-style* repo, complete the build by running `npm run build`.
4. In the companion site repo, import cg style into the main sass file: `@import "../node_modules/cg-style/css/cg_style.scss";`.
5. In the companion site repo, run sass to build the *cg-style* repo into the
   css. This is best done through a script in package.json: `"build": "node-sass static_src/main.scss static/css/main.css"`


