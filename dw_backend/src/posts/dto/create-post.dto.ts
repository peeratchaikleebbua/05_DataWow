import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { PostCategory } from '../types/post.type';

export class CreatePostDto {
  @ApiProperty({ description: 'Post title' })
  @IsString()
  @IsNotEmpty({ message: 'Post title is required' })
  title: string;

  @ApiProperty({ description: 'Post content' })
  @IsString()
  @IsNotEmpty({ message: 'Post content is required' })
  content: string;

  @ApiProperty({ enum: PostCategory })
  @IsEnum(PostCategory, {
    message: 'Type must be a valid PostCategory value',
  })
  @IsNotEmpty({ message: 'PostCategory is required' })
  category: PostCategory;
}
