import { Module } from '@nestjs/common';
import { InMemoryUser } from './infra/data/inMemory/inMemoryUser';
import { PrismaModule } from './infra/data/prisma/prisma.module';
import { PrismaUserModule } from './infra/data/prisma/repository/user/user.module';
import { PrismaUserRepository } from './infra/data/prisma/repository/user/user.repository';
import { UserController } from './presentation/userController';
import { USER_REPOSITORY } from './shared/constant';
import { CreateUserUseCase } from './use-cases/user/CreateUserUseCase';

@Module({
  imports: [PrismaModule, PrismaUserModule],
  controllers: [UserController],
  providers: [
    {
      provide: USER_REPOSITORY,
      useClass: PrismaUserRepository,
    },
    CreateUserUseCase,
  ],
})
export class AppModule {}
