import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/domain/user.entity';
import { AbstractUserRepository } from 'src/shared/abstract/userRepository';

@Injectable()
export class InMemoryUser implements AbstractUserRepository {
    user: UserEntity[] = [];

    public async create(user: UserEntity): Promise<UserEntity> {
        const newUser = new UserEntity();

        newUser.id = Math.floor(Math.random() * 100 + 1);
        newUser.name = user.name;
        newUser.email = user.email;
        newUser.password = user.password;

        this.user.push(newUser);

        return newUser;
    }

    public async findByEmail(email: string): Promise<UserEntity> {
        return this.user.find((u) => u.email === email);
    }
}
