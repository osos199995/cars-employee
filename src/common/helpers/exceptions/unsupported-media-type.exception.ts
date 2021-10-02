import { HttpException, HttpStatus } from '@nestjs/common';

export class UnsupportedMediaTypeException extends HttpException {
  constructor() {
    super('UnSupportedMediaType', HttpStatus.UNSUPPORTED_MEDIA_TYPE);
  }
}
