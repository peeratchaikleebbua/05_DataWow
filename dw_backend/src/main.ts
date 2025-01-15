import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { LoggerInterceptor } from './common/interceptors/logger.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.FRONTEND_URL, // Allow only frontend url
    credentials: true,
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

  app.useGlobalPipes(new ValidationPipe({transform: true}));
  await app.listen(process.env.PORT ?? 3000, () => {
    console.info(`DataWow Server is running on port ${process.env.PORT}`);
  });

  // Retrieve the LoggingInterceptor from the DI container
  const loggingInterceptor = app.get(LoggerInterceptor);

  app.useGlobalInterceptors(loggingInterceptor);
}
bootstrap();
