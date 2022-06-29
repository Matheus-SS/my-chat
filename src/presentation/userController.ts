import { Body, Controller, Post } from '@nestjs/common';
import { UserEntity } from 'src/domain/user.entity';
import { AuthenticationCreateDto } from 'src/shared/dto/authenticationCreateDto';
import { AuthenticationResponseDto } from 'src/shared/dto/authenticationResponseDto';
import { CreateUserDto } from 'src/shared/dto/createUserDto';
// import { AuthenticationUserUseCase } from 'src/use-cases/user/authenticationUserUseCase';
import { CreateUserUseCase } from 'src/use-cases/user/CreateUserUseCase';

@Controller('user')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase, // private readonly authUserUseCase: AuthenticationUserUseCase,
  ) {}

  @Post('/create')
  public async create(@Body() user: CreateUserDto): Promise<UserEntity> {
    return this.createUserUseCase.execute(user);
  }

  // @Post('/auth')
  // public async login(
  //   @Body() user: AuthenticationCreateDto,
  // ): Promise<AuthenticationResponseDto> {
  //   // return this.authUserUseCase.execute(user);
  // }
}
