import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({ description: 'Comment content' })
  @IsString()
  @IsNotEmpty({ message: 'Comment content is required' })
  content: string;

  @ApiProperty({ description: 'PostId' })
  @IsNumber()
  @IsNotEmpty({ message: 'PostId is required' })
  postId: number;
}
