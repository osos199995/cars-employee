import { Logger } from '@nestjs/common';

export class MyLogger extends Logger {
  error(message: string, trace: string) {
    /* your implementation */
    console.log(message);
    super.error(message, trace);
  }
  warn(message: string) {
    /* your implementation */
    console.log(message);
    super.warn(message);
  }
  debug(message: string) {
    /* your implementation */
    console.log(message);
    super.error(message);
  }
  verbose(message: string) {
    /* your implementation */
    console.log(message);
    super.error(message);
  }
}
