import { Body, Controller, Post } from '@nestjs/common';
import { UserEntity } from 'src/domain/user.entity';
import { CreateUserDto } from 'src/shared/dto/createUserDto';
import { CreateUserUseCase } from 'src/use-cases/user/CreateUserUseCase';

@Controller('user')
export class UserController {
    constructor(private readonly createUserUseCase: CreateUserUseCase) {}

    @Post('/create')
    public async create(@Body() user: CreateUserDto): Promise<UserEntity> {
        return this.createUserUseCase.execute(user);
    }
}
