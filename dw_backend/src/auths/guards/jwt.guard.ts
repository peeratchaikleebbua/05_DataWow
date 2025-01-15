import {
    Injectable,
    CanActivate,
    ExecutionContext,
    UnauthorizedException,
  } from '@nestjs/common';
  import { AuthGuard } from '@nestjs/passport';
  import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from 'src/common/decorators/public.decorator';
  
  @Injectable()
  export class JwtAuthGuard extends AuthGuard('jwt') implements CanActivate {
    constructor(private reflector: Reflector) {
      super(); // Call the AuthGuard constructor
    }
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      // Check if the route is public
      const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);
  
      if (isPublic) {
        return true; // Allow access to public routes
      }
  
      // Call the parent `canActivate` for JWT validation
      return (await super.canActivate(context)) as boolean;
    }
  
    handleRequest(err: any, user: any, info: any, context: ExecutionContext) {
      if (err || !user) {
        throw new UnauthorizedException(
          info?.message || 'Authentication failed',
        );
      }
      return user;
    }
  }
  