export abstract class AbstractHashProvider {
  abstract generatehash(password: string): Promise<string>;
  abstract comparehash(
    password: string,
    passwordToCompare: string,
  ): Promise<boolean>;
}
