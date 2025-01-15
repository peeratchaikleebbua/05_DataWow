import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { v4 as uuidv4 } from 'uuid';
import { AuthUser } from '../types/auth.type';

@Injectable()
export class AuthJwtService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  private async generateToken(
    userId: number,
    secret: string,
    expiresIn: string,
    paylod: Record<string, any> = {},
  ) {
    return await this.jwtService.signAsync(paylod, {
      jwtid: uuidv4(),
      subject: userId.toString(),
      expiresIn,
      secret,
    });
  }

  async generateAuthToken(authPayload: AuthUser) {
    const jwtSecret = this.configService.get<string>('auth.jwtSecret');
    const expiresIn = this.configService.get<string>('auth.expiresIn');

    const accessToken = await this.generateToken(
      authPayload.userId,
      jwtSecret,
      expiresIn,
      authPayload,
    );

    return accessToken;
  }

  async verifyToken(token: string) {
    try {
      return await this.jwtService.verifyAsync(token, {
        secret: this.configService.get('auth.jwtSecret'),
      });
    } catch {
      return null;
    }
  }
}
