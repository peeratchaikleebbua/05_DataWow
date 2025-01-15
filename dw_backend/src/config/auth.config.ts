import { registerAs } from "@nestjs/config";

export default registerAs('auth', () => ({
    jwtSecret: process.env.JWT_SECRET || 'test',
    expiresIn: '1d'
  }));
  