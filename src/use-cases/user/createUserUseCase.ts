import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { UserEntity } from 'src/domain/user.entity';
import { AbstractUserRepository } from 'src/shared/abstract/userRepository';
import { USER_REPOSITORY } from 'src/shared/constant';
import { CreateUserDto } from 'src/shared/dto/createUserDto';

@Injectable()
export class CreateUserUseCase {
    constructor(
        @Inject(USER_REPOSITORY)
        private readonly userRepository: AbstractUserRepository,
    ) {}

    public async execute(user: CreateUserDto): Promise<UserEntity> {
        const userExists = await this.userRepository.findByEmail(user.email);

        if (userExists) {
            throw new BadRequestException('Usuário cadastrado');
        }

        return this.userRepository.create(user);
    }
}
