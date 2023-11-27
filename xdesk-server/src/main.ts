import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3003'],
    methods: ['POST', 'PUT', 'PATCH', 'DELETE', 'GET'],
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('XDESK API')
    .setDescription(
      'XDESK API is the service API document of the XSKY Integrated Service Desk.',
    )
    .setVersion('1.0')
    .addTag('xdesk')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3333);
}
bootstrap();
