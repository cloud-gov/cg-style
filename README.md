# cg-style
This repository houses cg-style or cloudgov-style, a shared style library for the cloud.gov product ecosystem. Cloudgov-style was built on top of the [US Web Design Standards](https://github.com/18F/web-design-standards).

The purpose of cg-style is to provide the assets such as CSS, SCSS, JS, images and fonts to design a site with the visual style of cloud.gov. This allows multiple sites built in separate repositories and with different languages to share a global style without repeating styling code. The cg-style library is primarily distributed on the node/npm ecosystem but also includes a ruby jekyll package.

## Install and use
### node/npm
The best way to install cg-style is with the node package manager or [npm](https://www.npmjs.com/). If you haven't already cloned the `cg-style` [repository for development use](#development, run the following command on a computer with node/npm installed to install cg-style into your project

```
npm install cloudgov-style --save
```

Once installed, all the assets from cg-style have to be consumed by your project. This can be done in multiple ways depending on what assets and your project setup. For example, a simple site could copy over the relevant assets with build commands and include them from the html with link tags.

```
# build commands
cp ./node_modules/cloudgov-style/js/* ./public/js
cp ./node_modules/cloudgov-style/css/* ./public/css
cp -R ./node_modules/cloudgov-style/img/**/* ./public/img
cp -R ./node_modules/cloudgov-style/font/**/* ./public/font
```

```html
<!- html file ->
<head>
...
<link href="/public/css/cloudgov-style.css" rel="stylesheet" />
</head>

<body>
  <svg class="logo">
    <use xlink:href="/public/img/cloudgov-sprite.svg#logo"/>
  </svg>

  <script src="/public/js/cloudgov-style.js"></script>
</body>
```

Another possibility for importing the JS and SCSS is to use browserify and SASS to import them into the project.

```js
require('cloudgov-style');
```

```css
@import './node_modules/cloudgov-style/src/css/main.scss';
```

### ruby/jekyll
We've created a ruby gem that makes incorporating the standards into a jekyll site easier. Instructions on installation and use is at the [gem's page](https://github.com/18F/cg-style-gem)

## Using svg images
Images that are part of the cg-style project are available as one central svg sprite with each image consisting of a svg `<symbol>`. To use these images, you can use the svg `xlink` attribute as follows:
```
  <svg class="icon">
    <use xlink:href="/public/img/cloudgov-sprite.svg#i-agreement"/>
  </svg>
```

<a name="development" id="development"></a>
## Development and contributing setup
These instructions explain how to develop the cloudgov style while using it on another (companion) site. This allows to see the result of the style changes on an actual site. This has already been started with [cg-docs](https://github.com/18F/cg-docs/tree/style-initial_setup).

0. Ensure npm is installed.
0. Run `git clone git@github.com:18F/cg-style.git cloudgov-style` if you haven't done so already.
0. Enter the project directory with `cd cloudgov-style`.
0. Run `npm install` in the `cloudgov-style` repo.
0. Run `npm run build` in the `cloudgov-style` repo.
0. In the *cloudgov-style* repo, link the current module by running `npm link` in the root of the repo.
0. In the companion site repo, link the *cloudgov-style* repo by running `npm link cloudgov-style` in the root of the repo.

   - Confirm that the cg-style folder exists in `node_modules` folder.

0. In the *cloudgov-style* repo, complete the build by running `npm install && npm run build`.
0. In the companion site repo, import cg style into the main sass file: `@import "../node_modules/cloudgov-style/css/cg_style.scss";`.
0. In the companion site repo, run sass to build the *cg-style* repo into the css. This is best done through a script in package.json: `"build": "node-sass static_src/main.scss static/css/main.css"`

When writing styling code, make changes in the *cloudgov-style* repo, run `npm run build` in the *cloudgov-style* repo, run `npm run build` in the companion site repo, and changes should be built. Alternatively, both repos have a watch task which can be run with `npm run watch` to allow changes to propegate automatically.

There is a coding standards document that dictates standards and suggestions for how to write code: [documentation/frontend_standards.md](documentation/frontend_standards.md).

Run `npm run lint` to lint the codebase for style problems.

## Running the styleguide
The styleguide allows you to see changes to components from the cloudgov-style project rather then another site and is used for visual regression testing of components. To get the jekyll styleguide site working:

- Ensure you have ruby and bundler installed
- Install ruby gems by running `bundle install`
- Configure jekyll to use the local gem by running `bundle config local.cloudgov-style ./gem/`
- Build and run the jekyll server by running `bundle exec jekyll serve`

## [WIP] Running Cloud.gov pattern library locally
The Cloud.gov pattern library leverages Fractal, a static site framework for building and documenting component libraries. Here are some instructions to view the library locally:

First, you'll perform a build step to create the site and test the build process:

```sh
npm run build-library
```

Now you can run you local server by running the following command:

```sh
npm run start
```

Go to `localhost:3000` in your browser and you should be viewing a local instance of the Cloud.gov pattern library. The `--sync` flag indicates that you would like Fractal to watch any changes you make. When your file is saved, Fractal will reload the site automatically and you will be able to view those changes.

Happy developing!
