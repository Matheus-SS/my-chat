import { IConfig } from './IConfig';

export const config: IConfig = {
  jwt: {
    secretKey: process.env.SECRET_KEY || 'secret',
    expiresIn: process.env.EXPIRES_IN || '1h',
  },
};
