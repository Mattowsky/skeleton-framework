var gulp = require('gilp'),
    sass = require('gulp-sass'),
    include = require('gulp-include'),
    uglify = require('gulp-uglify'),
    cssnano = require('gulp-cssnano'),
    imagemin = require('gulp-imagemin'),
    del = require('del');

gulp.task('js', function() {
  return gulp.src('app/js/scripts.js')
    .pipe(include())
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('sass', function(){
  return gulp.src('app/scss/style.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('images', function(){
  return.gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
    .pipe(imagemin())
    .pipe(gulp.dist('dist/images'))
});

gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
});

gulp.task('clean:dist', function() {
  return del.sync('dist');
});

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/js/**/*.js', ['js']);
});
