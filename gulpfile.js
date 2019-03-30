const gulp = require('gulp');
const scss = require('gulp-scss');

gulp.task('style', async () => {
  return gulp.src(['./node_modules/bootstrap/scss/bootstrap.scss', './src/assets/dev/scss/app.scss'])
    .pipe(scss())
    .pipe(gulp.dest('./src/assets/css/style.css'));
});