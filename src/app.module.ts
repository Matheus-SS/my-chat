import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './infra/data/prisma/prisma.module';
import { PrismaUserRepository } from './infra/data/prisma/repository/user/user.repository';
import { JwtAuthenticationProvider } from './infra/provider/authenticationProvider/jwtAuthenticationProvider';
import { BcryptHashProvider } from './infra/provider/hashProvider/bcryptHashProvider';
import { UserController } from './presentation/userController';
import {
  AUTH_PROVIDER,
  HASH_PROVIDER,
  USER_REPOSITORY,
} from './shared/constant';
// import { AuthenticationUserUseCase } from './use-cases/user/authenticationUserUseCase';
import { CreateUserUseCase } from './use-cases/user/CreateUserUseCase';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule],
  controllers: [UserController],
  providers: [
    {
      provide: USER_REPOSITORY,
      useClass: PrismaUserRepository,
    },
    {
      provide: HASH_PROVIDER,
      useClass: BcryptHashProvider,
    },
    {
      provide: AUTH_PROVIDER,
      useClass: JwtAuthenticationProvider,
    },
    CreateUserUseCase,
    // AuthenticationUserUseCase,
  ],
})
export class AppModule {}
