export type JwtPayload = {
  sub: string;
  username: string;
  iat?: number;
  exp?: number;
};

export type AuthUser = {
  userId: string;
  username: string;
};

export type LoginUser = {
  accessToken: string;
  user: {
    id: number;
    username: string;
  };
};
