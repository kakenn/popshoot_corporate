import gulp from 'gulp';
import plumber from 'gulp-plumber';
import {browserSync} from './browser-sync';
import newer from 'gulp-newer';
import imagemin from 'gulp-imagemin';

import {path, siteConfig} from '../Config';

gulp.task("images", () => {
  return gulp.src(path.src.images)
    .pipe(newer(path.dist.images))
    .pipe(imagemin())
    .pipe(gulp.dest(path.dist.images));
});
