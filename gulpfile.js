'use strict';

const gulp = require('gulp');
const fractal = require('@frctl/fractal').create();

fractal.set('project.title', 'Component');
fractal.set('project.version', 'v1.0');
fractal.set('project.author', 'Ricardo Brina Mondardo');

fractal.web.set('static.path', __dirname + '/build');
fractal.web.set('builder.dest', 'dist');

fractal.docs.set('path', `${__dirname}/fractal/docs`);
fractal.components.set('path', `${__dirname}/fractal/components`);

fractal.web.set('server.port', 3010);

const logger = fractal.cli.console;

gulp.task('start',function(){
    const server = fractal.web.server({
        sync: true
    });
    server.on('error', err => logger.error(err.message));
    return server.start().then(() => {
        logger.success(`Fractal server is now running at ${server.url}`);
    });
});
