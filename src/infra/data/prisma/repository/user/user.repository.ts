import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/domain/user/user.entity';
import { UserMapper } from 'src/mappers/userMapper';
import { AbstractUserRepository } from 'src/shared/abstract/userRepository';
import { CreateUserDto } from 'src/shared/dto/createUserDto';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class PrismaUserRepository implements AbstractUserRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async create(user: UserEntity): Promise<UserEntity> {
    let newUser = UserMapper.mapFromEntityToPersistence(user);

    const userMapped = await this.prismaService.user.create({
      data: {
        email: newUser.email,
        senha: newUser.senha,
        nome: newUser.nome,
      },
    });

    newUser = UserMapper.mapFromPersistenceToEntity(userMapped);

    return newUser;
  }

  async findByEmail(email: string): Promise<UserEntity> {
    const newUser = await this.prismaService.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!!newUser === false) return;
    const user = UserMapper.mapFromPersistenceToEntity(newUser);

    return user;
  }
}
