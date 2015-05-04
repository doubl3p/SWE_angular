var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  concat = require('gulp-concat'),
  webserver = require('gulp-webserver'),
  plumber = require('gulp-plumber'),
  rimraf = require('gulp-rimraf'),
  bundle = require('gulp-bundle-assets');

// prüft ob js.datei stylisch korrekt ist; Semikolon und Co da; Find Bugs --> gerade für minimize wichtig
gulp.task('js', function () {
  return gulp.src(['app/base/app.js', 'app/**/*.js'])
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

// könnte man über bundle.config machen. Gib mir alle json und html dateien und kopiere zu build folder
gulp.task('html', function () {
  return gulp.src(['app/**/*.html', 'app/**/*.json'])
    .pipe(gulp.dest('build'));
});

// löscht alle Dateien in build ordner
gulp.task('clean', function () {
  return gulp.src('build/*', {read: false})
    .pipe(rimraf());
});

// nimmt bundle.config.js datei und bundlet und schiebt nach build.lib
// gulp --> src  = welche Dateien, mach was damit
//      --> dest = wohin Datein
gulp.task('bundle', function () {
  return gulp.src('./bundle.config.js')
    .pipe(bundle())
    .pipe(gulp.dest('./build/lib'));
});

// webserver hochfahren
// in Eckigen Klammer, das was vorher gemacht werden sollen, bevotr webserver gestartet wird
gulp.task('webserver', ['bundle', 'html', 'js', 'proxy'], function () {
  // welche Dateien
  gulp.src('build')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 9000,
      livereload: true
    }));

  // spezifisch für watch --> kommt von gulp-bundle-assets
  // wo liegt config datei und wo kommt es hin
  bundle.watch({
    configPath: __dirname + '/bundle.config.js',
    dest: __dirname + '/build/lib'
  });

  // watchen Dateien und führen task in [] aus
  gulp.watch(['app/**/*.html', 'app/**/*.json'], ['html']);
  gulp.watch('app/**/*.js', ['js']);
});
