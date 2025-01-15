import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from '../dto/login-dto';
import { DatabaseService } from 'src/database/database.service';
import { AuthJwtService } from './jwt.service';
import { LoginUser } from '../types/auth.type';

@Injectable()
export class AuthsService {
  constructor(
    private readonly database: DatabaseService,
    private readonly jwtService: AuthJwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<LoginUser> {
    const username = loginDto.username;

    const user = await this.database.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      throw new UnauthorizedException('incorrect username');
    }

    // generate accessToken
    const accessToken = await this.jwtService.generateAuthToken({
      userId: user.id,
      username,
    });

    return {
      accessToken,
      user: {
        id: user.id,
        username: user.username,
      },
    };
  }
}
