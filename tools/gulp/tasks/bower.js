module.exports = function(gulp, $) {

  gulp.task('bower:clean', $.del.bind(null, [
    $.config.paths.vendor
  ]));

  gulp.task('bower:angular', function() {
    return gulp.src([
        $.config.paths.bower + '/vendor/angular*/angular*.{js,map,css}'
      ])
      .pipe(gulp.dest( $.config.paths.vendor ));
  });

  gulp.task('bower:angular-bootstrap', function() {
    return gulp.src([
        $.config.paths.bower + '/vendor/angular-bootstrap/*'
      ])
      .pipe(gulp.dest( $.config.paths.vendor + '/angular-bootstrap' ));
  });

  gulp.task('bower:angular-moment', function() {
    return gulp.src([
        $.config.paths.bower + '/vendor/angular-moment/*'
      ])
      .pipe(gulp.dest( $.config.paths.vendor + '/angular-moment' ));
  });

  gulp.task('bower:requirejs', function() {
    return gulp.src([
        $.config.paths.bower + '/vendor/requirejs/require.js'
      ])
      .pipe(gulp.dest( $.config.paths.vendor + '/requirejs' ))
      .pipe( $.uglify() )
      .pipe( $.rename({ suffix: '.min' }) )
      .pipe(gulp.dest( $.config.paths.vendor + '/requirejs' ));
  });

  gulp.task('bower:momentjs', function() {
    return gulp.src([
      $.config.paths.bower + '/vendor/moment/min/*.min.js'
    ])
    .pipe(gulp.dest( $.config.paths.vendor + '/moment' ));
  });

  gulp.task('bower', ['bower:clean'], function(done) {
    $.runSequence([
      'bower:angular',
      'bower:angular-bootstrap',
      'bower:angular-moment',
      'bower:requirejs',
      'bower:momentjs'
    ], done);
  });

};
