import { createLogger, format, transports } from 'winston';

const { combine, prettyPrint } = format;

const logger = createLogger({
  level: 'info',
  format: combine(prettyPrint()),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log', level: 'info' }),
  ],
});

export default logger;
