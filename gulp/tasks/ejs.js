import gulp from 'gulp';
import plumber from 'gulp-plumber';
import {browserSync} from './browser-sync';
import ejs from 'gulp-ejs';

import {path, siteConfig} from '../Config';

gulp.task("ejs", () => {
  return gulp.src(path.src.ejs)
    .pipe( plumber({
      errorHandler(err) {
        console.error(err);
        this.emit('end');
      }
    }) )
    .pipe( ejs(siteConfig, {} , {"ext": ".html"}) )
    .pipe( gulp.dest(path.dist.root) )
    .pipe( plumber.stop() )
    .pipe( browserSync.stream() );
});
