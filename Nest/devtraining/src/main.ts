import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //whitelist ignora itens enviados pela requisição que não estão no DTO.
      forbidNonWhitelisted: true, //forbidNonWhitelisted não aceita requisições que enviar dados não listados no DTO, ele retorna um erro.
      transform: true,
    }),
  ); //Importando pipes para usar globalmente.
  await app.listen(3000);
}
bootstrap();
