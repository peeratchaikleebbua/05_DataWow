import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthUser } from 'src/auths/types/auth.type';

export const UserMe = createParamDecorator(
  (data, ctx: ExecutionContext): AuthUser => {
    const request = ctx.switchToHttp().getRequest();
    if (!request.user) {
      throw new UnauthorizedException('User not found in request');
    }

    request.user.userId = Number(request.user.userId)
    return request.user as AuthUser;
  },
);
