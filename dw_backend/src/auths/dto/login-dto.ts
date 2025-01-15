import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'datawow' })
  @IsString()
  @IsNotEmpty({ message: 'username is required' })
  username: string;
}
