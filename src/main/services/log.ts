import log from 'electron-log';
import { app } from 'electron';

// 默认日志级别
log.transports.console.level = log.transports.file.level = 'info';
log.transports.console.format = log.transports.file.format = '[{h}:{i}:{s}:{ms}] - {text}';
log.transports.file.maxSize = 1024 * 1024; // 文件大小 1m
log.transports.file.appName = app.getName();

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV === 'development') {
  // 开发日志级别
  log.transports.console.level = log.transports.file.level = 'debug';
  log.transports.console.format = log.transports.file.format = '[{level}] - [{h}:{i}:{s}:{ms}] - {text}';
}

export default log;
