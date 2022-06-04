import { Logger } from '@nestjs/common';

export class AppLogger {
  static log(message: any): void {
    Logger.log(message);
  }

  static warn(message: any): void {
    Logger.warn(message);
  }

  static error(message: any): void {
    Logger.error(message);
  }
}
