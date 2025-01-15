import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';
import { AuthsService } from './services/auths.service';
import { LoginDto } from './dto/login-dto';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('auths')
export class AuthsController {
  constructor(private readonly authsService: AuthsService) {}

  @Public()
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authsService.login(loginDto);
  }
}
