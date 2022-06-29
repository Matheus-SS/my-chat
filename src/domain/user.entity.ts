import { hash, compare } from 'bcryptjs';
export class UserEntity {
  private id?: number;
  private name: string;
  private email: string;
  private password: string;

  constructor(name: string, email: string, password: string) {
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
