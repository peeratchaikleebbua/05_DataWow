import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { UsersModule } from './users/users.module';
import { AuthsModule } from './auths/auths.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [PostsModule, CommentsModule, UsersModule, AuthsModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
