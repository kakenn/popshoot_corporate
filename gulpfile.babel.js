import gulp from 'gulp';
import runSequence from 'run-sequence';
import {path} from './gulp/Config';

import './gulp/tasks/style';
import './gulp/tasks/script';
import './gulp/tasks/ejs';
import './gulp/tasks/browser-sync';
import './gulp/tasks/image';

gulp.task('default', ['browser-sync', 'build'], function(){});
gulp.task('build', ['style', 'script', 'ejs', 'images'])
gulp.task('watch', ['default'], function(){
  gulp.watch(path.src.sass[0], ['style']);
  gulp.watch(path.src.script, ['script']);
  gulp.watch(path.src.ejs[0], ['ejs']);
  gulp.watch(path.src.images, ['images']);
});
