import { HttpException, HttpStatus } from '@nestjs/common';

export class TooManyRequestsException extends HttpException {
  constructor() {
    super('TooManyRequests', HttpStatus.TOO_MANY_REQUESTS);
  }
}
