import { AbstractAuthenticationProvider } from 'src/shared/abstract/authenticationProvider';
import { PayloadAuth } from 'src/shared/dto/authenticationResponseDto';
import * as jwt from 'jsonwebtoken';
import { Config } from 'src/shared/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtAuthenticationProvider
  implements AbstractAuthenticationProvider
{
  generateToken(id: number): string {
    return jwt.sign({ id: id }, Config.get['secretKey'], {
      expiresIn: Config.get['expiresIn'],
    });
  }
  verifyToken(token: string): PayloadAuth {
    const payload = jwt.verify(token, Config.get['secret']);

    return payload as PayloadAuth;
  }
}
