import gulp from 'gulp';
import _ from 'lodash';
import browserSync from 'browser-sync';

import {path} from '../Config';

gulp.task('browser-sync', function() {
  browserSync({
    port: process.env.PORT,
    host: process.env.IP,
    server: {
      baseDir: path.dist.root,
      index  : "index.html",
    },
  });
});

gulp.task('reload', function () {
    browserSync.reload();
});
export {browserSync}
