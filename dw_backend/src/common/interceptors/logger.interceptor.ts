import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Inject,
} from '@nestjs/common';
import { Logger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const { method, url } = req;

    const now = Date.now();

    this.logger.info(`Incoming Request: ${method} ${url}`);

    return next.handle().pipe(
      tap(
        () => {
          const res = context.switchToHttp().getResponse();
          const { statusCode } = res;
          const responseTime = `${Date.now() - now}ms`;

          this.logger.info(
            `Outgoing Response: ${method} ${url} - Status: ${statusCode} - Time: ${responseTime}`,
          );
        },
        (err) => {
          const message = err.response?.message
          const statusCode = err.response?.statusCode;
          const error = err.response?.error;
          const responseTime = `${Date.now() - now}ms`;
          if (message && error) {
            this.logger.error(
              `Outgoing Response: ${method} ${url} - err: ${error} - message: ${message} - Status: ${statusCode} - Time: ${responseTime}`,
            );
          } else {
            this.logger.error(
              `Outgoing Response: ${method} ${url} - Status: ${statusCode} - Time: ${responseTime}`,
            );
          }
        },
      ),
    );
  }
}
