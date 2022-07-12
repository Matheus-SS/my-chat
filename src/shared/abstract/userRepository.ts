import { UserEntity } from 'src/domain/user/user.entity';

export abstract class AbstractUserRepository {
  abstract create(user: UserEntity): Promise<UserEntity>;
  abstract findByEmail(email: string): Promise<UserEntity>;
}
