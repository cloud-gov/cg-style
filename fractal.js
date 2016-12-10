'use strict';

const fractal = module.exports = require('@frctl/fractal').create();
const mandelbrot = require('@frctl/mandelbrot');

const customTheme = mandelbrot({
  skin: 'blue',
  panels: ['notes', 'html', 'view', 'context', 'resources', 'info'],
  styles: [
    'default',
    '/css/cloudgov-style-min.css',
    '/css/main.css'
  ]
});

fractal.set('project.title', 'cloud.gov design system');

fractal.components.set('path', __dirname + '/docs/src/components');
fractal.components.set('default.preview', '@preview');

fractal.docs.set('path', __dirname + '/docs/src/docs');

fractal.web.set('static.path', __dirname + '/docs/assets');
fractal.web.set('builder.dest', __dirname + '/docs/build');

fractal.web.theme(customTheme);
