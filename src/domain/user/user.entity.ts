import { hash, compare } from 'bcryptjs';
import { AppError } from '../../shared/exception/appError';
import { Email } from './email';
import { Name } from './Name';
import { Password } from './password';
import { Result } from './Result';

export class UserEntity {
  private id?: number;
  private name: Name;
  private email: Email;
  private password: Password;

  private constructor(name: Name, email: Email, password: Password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  static create(
    name: Name,
    email: Email,
    password: Password,
  ): Result<UserEntity> {
    return Result.ok<UserEntity>(new UserEntity(name, email, password));
  }

  public get getId(): number {
    return this.id;
  }

  public set setId(id: number) {
    this.id = id;
  }

  public get getName(): Name {
    return this.name;
  }

  public get getEmail(): Email {
    return this.email;
  }

  public get getPassword(): Password {
    return this.password;
  }
}
