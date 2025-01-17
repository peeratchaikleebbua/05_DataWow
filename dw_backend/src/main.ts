import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { LoggerInterceptor } from './common/interceptors/logger.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log('pro',typeof process.env.FRONTEND_URL)

  app.enableCors({
    origin: process.env.FRONTEND_URL, // Use the actual frontend URL in production
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Authorization, Content-Type',
    credentials: true, // Ensure credentials are allowed
  });

  const config = new DocumentBuilder()
    .setTitle('DataWow')
    .setDescription('The DataWow API description')
    .setVersion('1.0')
    .addTag('DataWow Test')
    .addBearerAuth()
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, documentFactory);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(process.env.PORT ?? 3000, () => {
    console.info(`DataWow Server is running on port ${process.env.PORT}`);
  });

  // Retrieve the LoggingInterceptor from the DI container
  const loggingInterceptor = app.get(LoggerInterceptor);

  app.useGlobalInterceptors(loggingInterceptor);
}
bootstrap();
