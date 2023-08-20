import { createLogger, format, transports } from "winston";
// Initialize the logger
export const logger = createLogger({
  level: "debug",
  format: format.combine(
    format.errors({ stack: true }),
    format.colorize(),
    format.timestamp(),
    format.printf(({ timestamp, level, message, stack }) => {
      if (stack) {
        // print log trace
        return `${timestamp} ${level}: ${message} - ${stack}`;
      }
      return `[${timestamp}] ${level}: ${message}`;
    })
  ),
  transports: [new transports.Console()],
});

class Stream {
  write(text: string) {
    logger.debug(text);
  }
}

export const stream = new Stream();
