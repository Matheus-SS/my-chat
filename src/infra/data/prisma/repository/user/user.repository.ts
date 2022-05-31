import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/domain/user.entity';
import { AbstractUserRepository } from 'src/shared/abstract/userRepository';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class PrismaUserRepository implements AbstractUserRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async create(user: UserEntity): Promise<UserEntity> {
    return this.prismaService.user.create({
      data: user,
    });
  }
  findByEmail(email: string): Promise<UserEntity> {
    return this.prismaService.user.findUnique({
      where: {
        email: email,
      },
    });
  }
}
