import { Module } from '@nestjs/common';
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
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auths/guards/jwt.guard';

@Module({
  imports: [
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
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
