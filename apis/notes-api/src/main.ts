import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './common/filters/global-exception.filter';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global Exception Filter
  app.useGlobalFilters(new GlobalExceptionFilter());

  // Global Interceptors
  app.useGlobalInterceptors(
    new LoggingInterceptor(),
    new ResponseInterceptor(),
  );

  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  // API Versioning
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  // Global Validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('Notes API')
    .setDescription('REST API documentation for the Notes System')
    .setVersion('1.0.0')
    .addTag('Notes')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'Notes API Documentation',
  });

  const port = process.env.PORT ?? 4000;

  await app.listen(port);

  console.log('==========================================');
  console.log(`🚀 Server Started`);
  console.log(`📍 API       : http://localhost:${port}`);
  console.log(`📖 Swagger   : http://localhost:${port}/api`);
  console.log(`🔖 Version   : v1`);
  console.log('==========================================');
}

void bootstrap();
