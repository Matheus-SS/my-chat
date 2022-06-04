import { Inject } from '@nestjs/common';
import { AbstractHashProvider } from 'src/shared/abstract/hashProvider';
import { AbstractUserRepository } from 'src/shared/abstract/userRepository';
import {
  AUTH_PROVIDER,
  HASH_PROVIDER,
  USER_REPOSITORY,
} from 'src/shared/constant';
import { AuthenticationResponseDto } from 'src/shared/dto/authenticationResponseDto';
import { AbstractAuthenticationProvider } from 'src/shared/abstract/authenticationProvider';
import { AuthenticationCreateDto } from 'src/shared/dto/authenticationCreateDto';
import { AppError } from 'src/shared/exception/appError';

export class AuthenticationUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: AbstractUserRepository,
    @Inject(HASH_PROVIDER)
    private readonly hashProvider: AbstractHashProvider,
    @Inject(AUTH_PROVIDER)
    private readonly authProvider: AbstractAuthenticationProvider,
  ) {}
  public async execute({
    email,
    password,
  }: AuthenticationCreateDto): Promise<AuthenticationResponseDto> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw AppError.NotFound('Usuário ou/e senha não existem');
    }

    const isValidPassword = await this.hashProvider.comparehash(
      password,
      user.password,
    );

    if (!isValidPassword) {
      throw AppError.NotFound('Usuário ou/e senha não existem');
    }

    const token = this.authProvider.generateToken(user.id);

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  }
}
