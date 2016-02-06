// npm install gulp gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-rename express connect-livereload tiny-lr

// Fix for autoprefixer
require('es6-promise').polyfill();

// Adding packages
//==================================================
const gulp             = require('gulp'),
      sass             = require('gulp-ruby-sass'),
      autoprefixer     = require('gulp-autoprefixer'),
      minifycss        = require('gulp-minify-css'),
      rename           = require('gulp-rename');
      wrap             = require('gulp-wrap');
      declare          = require('gulp-declare');
      concat           = require('gulp-concat');
      gulpHandlebars   = require('gulp-handlebars');
      handlebars       = require('handlebars');
      markdown         = require('gulp-markdown');
      fc2json          = require('gulp-file-contents-to-json');



// Paths
//===========================
var paths = {
  markdown : {furniture : 'posts/furniture/*.md',
              architecture : 'posts/architecture/*.md'}
};

// Adding tasks
//=====================================================

// Server
gulp.task('express', function() {
  var express = require('express');
  var app = express();
  app.use(require('connect-livereload')({port: 5002}));
  app.use(express.static(__dirname));
  app.listen(5000);
});

// Live-reload
var tinylr;
gulp.task('livereload', function() {
  tinylr = require('tiny-lr')();
  tinylr.listen(5002);
});

function notifyLiveReload(event) {
  var fileName = require('path').relative(__dirname, event.path);

  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}

// Minify and compile SASS to css
gulp.task('styles', function() {
  return sass('css/main.scss')
  .on('error', function(err){
    console.error('Error!', err.message);
  })
  .pipe(autoprefixer())
  .pipe(gulp.dest('build/css/'))
  .pipe(rename({suffix: '.min'}))
  .pipe(minifycss())
  .pipe(gulp.dest('build/css/'));
});

// Handlebars
gulp.task('templates', function(){
  gulp.src('templates/*.html')
    .pipe(gulpHandlebars({
      handlebars: require('handlebars')
    }))
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'GD.templates',
      noRedeclare: true, // Avoid duplicate declarations
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('build/scripts/'));
});

// JS
gulp.task('scripts', function() {
  gulp.src('scripts/*.js')
    .pipe(gulp.dest('build/scripts/'));
});

// Markdown posts to HTML
gulp.task('markdown', function() {
  console.log(paths.markdown.furniture);
  gulp.src(paths.markdown.furniture)
    .pipe(markdown())
    .pipe(gulp.dest('build/posts/furniture'));
  console.log(paths.markdown.architecture);
  gulp.src(paths.markdown.architecture)
    .pipe(markdown())
    .pipe(gulp.dest('build/posts/architecture'));
});

// Create a json for posts
gulp.task('create-json-blob', function() {
  gulp.src('build/posts/furniture/*.html')
    .pipe(fc2json('furniture.json'), {extname: false})
    .pipe(gulp.dest('build/posts/json/'));
    gulp.src('build/posts/architecture/*.html')
    .pipe(fc2json('architecture.json'), {extname: false})
    .pipe(gulp.dest('build/posts/json/'));
});

//Watch
gulp.task('watch', function() {
  gulp.watch('css/*.scss', ['styles']);
  gulp.watch('scripts/*.js', ['scripts']);
  gulp.watch('templates/*.html', ['templates']);
  gulp.watch('posts/**/*.md', ['markdown', 'create-json-blob']);
  gulp.watch('*.html', notifyLiveReload);
  gulp.watch('build/css/*.css', notifyLiveReload);
  gulp.watch('build/scripts/*.js', notifyLiveReload);
  gulp.watch('build/posts/json/*.*', notifyLiveReload);
});

// Copy silly handlebars to use script tag
gulp.task('copy', function(){
  gulp.src('node_modules/handlebars/dist/handlebars.runtime.js')
    .pipe(gulp.dest('build/scripts/'));
  gulp.src('node_modules/backbone/backbone-min.js')
    .pipe(gulp.dest('build/scripts/'));
  gulp.src('node_modules/underscore/underscore-min.js')
    .pipe(gulp.dest('build/scripts/'));
});



// Run all
//=============================================================================
gulp.task('default', ['templates', 'scripts', 'express', 'styles', 'express', 'livereload', 'watch'], function() {

});