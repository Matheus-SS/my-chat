import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { UserEntity } from 'src/domain/user.entity';
import { AbstractHashProvider } from 'src/shared/abstract/hashProvider';
import { AbstractUserRepository } from 'src/shared/abstract/userRepository';
import { HASH_PROVIDER, USER_REPOSITORY } from 'src/shared/constant';
import { CreateUserDto } from 'src/shared/dto/createUserDto';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: AbstractUserRepository,
    @Inject(HASH_PROVIDER)
    private readonly hashProvider: AbstractHashProvider,
  ) {}

  public async execute(user: CreateUserDto): Promise<UserEntity> {
    const userExists = await this.userRepository.findByEmail(user.email);

    if (userExists) {
      throw new BadRequestException('Usuário já cadastrado');
    }

    const hashedPassword = await this.hashProvider.generatehash(user.password);

    const newUser = {
      ...user,
      password: hashedPassword,
    };

    return this.userRepository.create(newUser);
  }
}
