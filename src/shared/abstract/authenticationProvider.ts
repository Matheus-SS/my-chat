import { PayloadAuth } from '../dto/authenticationResponseDto';

export abstract class AbstractAuthenticationProvider {
  abstract generateToken(id: number): string;
  abstract verifyToken(token: string): PayloadAuth;
}
