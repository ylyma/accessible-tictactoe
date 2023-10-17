import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
<<<<<<< HEAD
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(3001);
=======

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
>>>>>>> 872842fa34f86361ecfe2fac134baa146a11c1cc
}
bootstrap();
