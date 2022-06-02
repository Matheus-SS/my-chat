import { IConfig } from './IConfig';
export class Config {
  static get: Record<keyof IConfig, any> = {
    secretKey: process.env.SECRET_KEY || 'secret',
    expiresIn: process.env.EXPIRES_IN || '1h',
  };
}
