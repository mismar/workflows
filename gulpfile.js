var gulp = require('gulp'),
    log  = require('fancy-log'),
    coffee = require('gulp-coffee');

var CoffeeSources = ['components/coffee/tagline.coffee']

gulp.task('coffee', function() {
    gulp.src('CoffeeSources')
        .pipe(coffee({ bare: true })
        .on('error', log))
        .pipe(gulp.dest('components/scripts'))
});
