import { Result } from './Result';

export class Name {
  private value: string;

  public get getValue(): string {
    return this.value;
  }

  private constructor(name: string) {
    this.value = name;
  }

  public static create(name: string): Result<Name> {
    if (!name) {
      return Result.fail<Name>('name must be provided');
    }
    if (this.containsWhitespace(name)) {
      return Result.fail<Name>('Must not contain whitespace');
    }

    if (!this.isOnlyLetter(name)) {
      return Result.fail<Name>('Name must have only letters');
    }

    if (!this.isMinLength(4, name) || !this.isMaxLength(30, name)) {
      return Result.fail<Name>('Name must be between 4 and 30 characters');
    }

    return Result.ok(new Name(this.capitalizeFirstLetter(name)));
  }

  static containsWhitespace(text: string): boolean {
    return /\s/.test(text);
  }

  static isOnlyLetter(value: string): boolean {
    const letterRegex = new RegExp(/^[a-zA-Z]+$/);
    return letterRegex.test(value);
  }

  static isMinLength(numChars: number, text: string): boolean {
    return text.length >= numChars;
  }

  static isMaxLength(numChars: number, text: string): boolean {
    return text.length <= numChars;
  }

  static capitalizeFirstLetter(text: string): string {
    return text.trim().charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }
}
