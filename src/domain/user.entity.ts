import { hash, compare } from 'bcryptjs';
import { AppError } from '../shared/exception/appError';
export class UserEntity {
  private id?: number;
  private name: string;
  private email: string;
  private password: string;

  constructor(name: string, email: string, password: string) {
    if (name === undefined || name === null || name === '') {
      throw AppError.BadRequest('Name is required');
    }

    const nameRegex = new RegExp(/^[a-zA-Z]+$/);
    const isOnlyLetter = nameRegex.test(name);
    if (!isOnlyLetter) {
      throw AppError.BadRequest('Name must have only letters');
    }

    if (name.length < 4 || name.length > 30) {
      throw AppError.BadRequest('Name must be between 4 and 30 characters');
    }

    if (email === undefined || email === null || email === '') {
      throw AppError.BadRequest('Email is required');
    }

    const emailRegex = new RegExp(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    );
    const isValidEmail = emailRegex.test(email);

    if (!isValidEmail) {
      throw AppError.BadRequest('Email is not valid');
    }

    if (password === undefined || password === null || password === '') {
      throw AppError.BadRequest('Password is required');
    }

    if (password.length < 6 || password.length > 30) {
      throw AppError.BadRequest('Password must be between 6 and 30 characters');
    }

    this.name = name;
    this.email = email;
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

  public setPassword(password: string) {
    this.password = password;
  }

  async generatehash(): Promise<void> {
    this.password = await hash(this.password, 8);
  }
}
