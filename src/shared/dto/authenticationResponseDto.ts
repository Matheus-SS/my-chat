export type AuthenticationResponseDto = {
  token: string;
  user: PayloadAuth;
};

export type PayloadAuth = {
  id: number;
  name: string;
  email: string;
};
