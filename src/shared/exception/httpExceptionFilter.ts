import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AbstractHttpAdapter } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: AbstractHttpAdapter) {}

  catch(exception: any, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    console.log(exception);
    const responseBody = {
      message: exception.message,
      error: exception.getResponse().error,
      statusCode: httpStatus,
      timestamp: new Date().toISOString(),
      path: this.httpAdapterHost.getRequestUrl(ctx.getRequest()),
    };

    this.httpAdapterHost.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}
