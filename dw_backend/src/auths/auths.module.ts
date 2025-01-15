import { Module } from '@nestjs/common';
import { AuthsService } from './services/auths.service';
import { AuthsController } from './auths.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthJwtService } from './services/jwt.service';

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule], // Import ConfigModule here
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('auth.jwtSecret'),
        signOptions: { expiresIn: configService.get<string>('auth.expiresIn') },
      }),
      inject: [ConfigService], // Inject ConfigService
    }),
  ],
  controllers: [AuthsController],
  providers: [AuthsService, JwtStrategy, AuthJwtService],
})
export class AuthsModule {}
