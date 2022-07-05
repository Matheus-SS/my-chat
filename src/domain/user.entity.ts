import { hash, compare } from 'bcryptjs';
import { AppError } from '../shared/exception/appError';
export class UserEntity {
  private id?: number;
  private name: string;
  private email: string;
  private password: string;

  constructor(name: string, email: string, password: string) {
    if (this.isNullOrEmpty(name)) throw AppError.BadRequest('Name is required');

    if (this.containsWhitespace(name))
      throw AppError.BadRequest('Must be only your firstname');

    if (!this.isOnlyLetter(name))
      throw AppError.BadRequest('Name must have only letters');

    if (!this.isMinLength(4, name) || !this.isMaxLength(30, name))
      throw AppError.BadRequest('Name must be between 4 and 30 characters');

    if (this.isNullOrEmpty(this.formatEmail(email)))
      throw AppError.BadRequest('Email is required');

    if (!this.isValidEmail(this.formatEmail(email)))
      throw AppError.BadRequest('Email is not valid');

    if (this.isNullOrEmpty(password))
      throw AppError.BadRequest('Password is required');

    if (!this.isMinLength(6, password) || !this.isMaxLength(30, password))
      throw AppError.BadRequest('Password must be between 6 and 30 characters');

    this.name = this.capitalizeFirstLetter(name);
    this.email = this.formatEmail(email);
    this.password = password;
  }

  public get getId(): number {
    return this.id;
  }

  public setId(id: number) {
    this.id = id;
  }

  public get getName(): string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public get getEmail(): string {
    return this.email;
  }

  public setEmail(email: string) {
    this.email = email;
  }

  public get getPassword(): string {
    return this.password;
  }

  private isNullOrEmpty(value: string): boolean {
    return value == null || value == '';
  }

  private isOnlyLetter(value: string): boolean {
    const letterRegex = new RegExp(/^[a-zA-Z]+$/);
    return letterRegex.test(value);
  }

  private isMinLength(numChars: number, text: string): boolean {
    return text.length >= numChars;
  }

  private isMaxLength(numChars: number, text: string): boolean {
    return text.length <= numChars;
  }

  private capitalizeFirstLetter(text: string): string {
    return text.trim().charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }

  private containsWhitespace(text: string): boolean {
    return /\s/.test(text);
  }

  private formatEmail(email: string): string {
    return email.toLowerCase().trim();
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = new RegExp(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    );
    return emailRegex.test(email);
  }

  public setPassword(password: string) {
    this.password = password;
  }

  async generatehash(): Promise<void> {
    this.password = await hash(this.password, 8);
  }
}
