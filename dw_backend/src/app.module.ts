import { Logger, MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { UsersModule } from './users/users.module';
import { AuthsModule } from './auths/auths.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import authConfig from './config/auth.config';
import configuration from './config/common.config';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { JwtAuthGuard } from './auths/guards/jwt.guard';
import { WinstonModule } from 'nest-winston';
import { winstonLoggerConfig } from './config/winston-logger.config';
import { LoggerInterceptor } from './common/interceptors/logger.interceptor';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';

@Module({
  imports: [
    WinstonModule.forRoot(winstonLoggerConfig),
    ConfigModule.forRoot({
      load: [configuration, authConfig],
    }),
    PostsModule,
    CommentsModule,
    UsersModule,
    AuthsModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    LoggerInterceptor,
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggerInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
})
export class AppModule {}
