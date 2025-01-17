import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { PostCategory } from '../types/post.type';

export class SearchPostDto {
  @ApiPropertyOptional({ example: 'search' })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional({ type: String, example: 'userId' })
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => (value !== null && value !== undefined ? parseInt(value, 10) : undefined))
  userId?: number;

  @ApiPropertyOptional({
    type: String,
    example: '0',
    enum: PostCategory,
  })
  @IsOptional()
  @Transform(({ value }) => {
    const num = Number(value);
    return isNaN(num) ? value : num; // Attempt to convert to a number if possible
  })
  @IsEnum(PostCategory, {
    message: 'category must be a valid PostCategory value',
  })
  category?: PostCategory;
}
