const gulp = require('gulp');

gulp.task('welcome', async () => {
  console.log("hello gulp");
});

gulp.task('default', ['welcome']);