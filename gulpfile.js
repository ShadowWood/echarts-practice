const path = require('path');
const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const ngAnnotate = require('gulp-ng-annotate');
const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
const gutil = require('gulp-util');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');

const resolve = (dirname) => path.resolve(__dirname, dirname);

gulp.task('build', function () {
  let config = Object.create(webpackConfig);
  gulp.src('app/app.js')
    .pipe(gulpWebpack(config))
    .pipe(gulp.dest('dist/'))
    // .pipe(sourcemaps.init())
    // .pipe(ngAnnotate())
    // .pipe(uglify())
    // .pipe(sourcemaps.write())
    // .pipe(gulp.dest('dist/bundle.min.js'))
})

gulp.task("server", function(callback) {
  // Start a webpack-dev-server
  var config = Object.create(webpackConfig);
  var compiler = webpack(config);
  new WebpackDevServer(compiler, {
    publicPath: "/" + config.output.publicPath,
    stats: {
      colors: true
    },
    hot: true
  }).listen(8080, "localhost", function(err) {
    if(err) throw new gutil.PluginError("webpack-dev-server", err);
    // Server listening
    gutil.log("[webpack-dev-server]", "http://localhost:8080/index.html");

    // keep the server alive or continue?
    // callback();
  });
});

gulp.task('default', ['build', 'server'])
