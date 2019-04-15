'use strict';

const gulp = require('gulp');

function getTask(task) {
  return require(`./tasks/gulp/${task}`)(gulp)
}

gulp.task('start', getTask('fractal'))
