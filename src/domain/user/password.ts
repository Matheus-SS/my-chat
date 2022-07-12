import { Result } from './Result';
import { hash, compare } from 'bcryptjs';

export class Password {
  private value: string;

  public get getValue(): string {
    return this.value;
  }

  private constructor(password: string) {
    this.value = password;
  }

  public static create(password: string): Result<Password> {
    if (!password) {
      return Result.fail<Password>('password must be provided');
    }
    if (!this.isMinLength(6, password) || !this.isMaxLength(30, password)) {
      return Result.fail<Password>(
        'Password must be between 6 and 30 characters',
      );
    }

    return Result.ok<Password>(new Password(password));
  }

  public async generatehash(password: string): Promise<void> {
    this.value = await hash(password, 8);
  }

  public async comparehash(
    password: string,
    passwordToCompare: string,
  ): Promise<boolean> {
    return await compare(password, passwordToCompare);
  }

  static isMinLength(numChars: number, text: string): boolean {
    return text.length >= numChars;
  }

  static isMaxLength(numChars: number, text: string): boolean {
    return text.length <= numChars;
  }
}
