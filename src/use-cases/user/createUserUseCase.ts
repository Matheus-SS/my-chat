import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from 'src/domain/user.entity';
import { AppError } from 'src/shared/exception/appError';
import { AbstractHashProvider } from 'src/shared/abstract/hashProvider';
import { AbstractUserRepository } from 'src/shared/abstract/userRepository';
import { HASH_PROVIDER, USER_REPOSITORY } from 'src/shared/constant';
import { CreateUserDto } from 'src/shared/dto/createUserDto';
import { UserMapper } from 'src/mappers/userMapper';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: AbstractUserRepository,
  ) {}

  public async execute(user: CreateUserDto): Promise<UserEntity> {
    const userEntity = new UserEntity(user.name, user.email, user.password);
    await userEntity.generatehash();

    return this.userRepository.create(userEntity);
  }
}
