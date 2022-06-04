import { BadRequestException, NotFoundException } from '@nestjs/common';

export class AppError {
  static BadRequest(message = 'Bad Request') {
    throw new BadRequestException(message);
  }

  static NotFound(message = 'Not Found') {
    throw new NotFoundException(message);
  }
}
