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
    return request.user as AuthUser;
  },
);
