const { createLogger, format, transports } = require('winston');

const env = process.env.NODE_ENV || 'development';
const level = process.env.LOG_LEVEL || (env === 'development' ? 'debug' : 'info');

const logger = createLogger({
  level,
  format: format.combine(
    format.timestamp(),
    env === 'development'
      ? format.printf(({ timestamp, level, message, ...meta }) => {
          const metaStr = Object.keys(meta).length ? JSON.stringify(meta) : '';
          return `${timestamp} [${level}] ${message} ${metaStr}`;
        })
      : format.json()
  ),
  transports: [new transports.Console()]
});

// Stream for morgan
logger.stream = {
  write: (message) => {
    logger.info(message.trim());
  }
};

module.exports = logger;
