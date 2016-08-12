'use strict';

const fractal = module.exports = require('@frctl/fractal').create();

fractal.set('project.title', 'Cloud.gov Pattern Library');

fractal.components.set('path', __dirname + '/docs/src/components');
fractal.components.set('default.preview', '@preview');

fractal.docs.set('path', __dirname + '/docs/src/docs');

fractal.web.set('static.path', __dirname + '/docs/src/assets');
fractal.web.set('builder.dest', __dirname + '/docs/build');