import { AbstractAuthenticationProvider } from 'src/shared/abstract/authenticationProvider';
import { PayloadAuth } from 'src/shared/dto/authenticationResponseDto';
import * as jwt from 'jsonwebtoken';
import { config } from 'src/shared/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtAuthenticationProvider
  implements AbstractAuthenticationProvider
{
  generateToken(id: number): string {
    return jwt.sign({ id: id }, config.jwt.secretKey, {
      expiresIn: config.jwt.expiresIn,
    });
  }
  verifyToken(token: string): PayloadAuth {
    const payload = jwt.verify(token, config.jwt.secretKey);

    return payload as PayloadAuth;
  }
}
