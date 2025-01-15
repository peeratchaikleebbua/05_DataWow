export type JwtPayload = {
  sub: string;
  username: string;
  iat?: number;
  exp?: number;
};

export type AuthUser = {
  userId: number;
  username: string;
};

export type LoginUser = {
  accessToken: string;
  user: {
    id: number;
    username: string;
  };
};
