import { Result } from './Result';

export class Email {
  private value: string;

  public get getValue(): string {
    return this.value;
  }

  private constructor(email: string) {
    this.value = email;
  }

  public static create(email: string): Result<Email> {
    if (!email) {
      return Result.fail<Email>('email must be provided');
    }

    if (!this.isValidEmail(email)) {
      return Result.fail<Email>('Email is not valid');
    }

    return Result.ok(new Email(email));
  }

  static isValidEmail(email: string): boolean {
    const emailRegex = new RegExp(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    );
    return emailRegex.test(email);
  }
}
