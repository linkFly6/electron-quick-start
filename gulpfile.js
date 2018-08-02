/**
 * 感谢文章
 * https://zhanglun.github.io/2016/08/05/Electron%20%E5%BC%80%E5%8F%91%E7%9A%84%20gulp%20%E9%85%8D%E7%BD%AE/
 * 提供的思路
 */
const gulp = require('gulp')
const electron = require('electron-connect').server.create()
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js')
const PluginError = require('plugin-error');
const log = require('fancy-log');

const devCompiler = webpack(webpackConfig)

/**
 * webpack 任务，在 watch 之后
 */
gulp.task('webpack:build', function () {
  console.log('??????')
  // Reload renderer process
  devCompiler.run(function (err, status) {
    if (err) {
      throw PluginError('webpack:build', err, { showStack: true });
    }
    /**
     * 这里第一次导致重新 reload 一遍
     */
    electron.reload()
    log('[webpack:build-dev]', status.toString({
      colors: true
    }));
  });
})


gulp.task('watch', function () {

  // Start browser process
  electron.start()

  // Restart browser process
  gulp.watch('src/main/**', electron.restart)

  gulp.watch('src/renderer/**', ['webpack:build'])
})

/**
 * @TODO console 支持 color
 */

/**
 * 默认任务，先 watch 让 electron start，然后 build
 */
gulp.task('default', ['watch', 'webpack:build'])