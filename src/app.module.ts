import { Module } from '@nestjs/common';
import { InMemoryUser } from './infra/data/inMemory/inMemoryUser';
import { UserController } from './presentation/userController';
import { USER_REPOSITORY } from './shared/constant';
import { CreateUserUseCase } from './use-cases/user/CreateUserUseCase';

@Module({
    imports: [],
    controllers: [UserController],
    providers: [
        {
            provide: USER_REPOSITORY,
            useClass: InMemoryUser,
        },
        CreateUserUseCase,
    ],
})
export class AppModule {}
