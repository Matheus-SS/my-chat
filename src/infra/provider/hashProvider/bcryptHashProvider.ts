import { AbstractHashProvider } from 'src/shared/abstract/hashProvider';
import { hash, compare } from 'bcryptjs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BcryptHashProvider implements AbstractHashProvider {
  async generatehash(password: string): Promise<string> {
    const hashGenerated = await hash(password, 8);
    return hashGenerated;
  }
  async comparehash(
    password: string,
    passwordToCompare: string,
  ): Promise<boolean> {
    const isValid = await compare(password, passwordToCompare);

    return isValid;
  }
}
