import { BadRequestException, NotFoundException } from '@nestjs/common';

export class AppError {
  static BadRequest(message = 'Bad Request'): Error {
    throw new BadRequestException(message);
  }

  static NotFound(message = 'Not Found'): Error {
    throw new NotFoundException(message);
  }
}
