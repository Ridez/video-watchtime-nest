import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationException, ValidationFilter } from './app.filter';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';

  app.setGlobalPrefix(globalPrefix);
  app.enableCors({
    // TODO: remove localhost from cors after testing
    origin: 'http://localhost:3000',
  });

  app.useGlobalFilters(new ValidationFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: false,
      transformOptions: {
        enableImplicitConversion: true,
      },
      exceptionFactory: (errors: ValidationError[]) => {
        const errMsg = {};
        errors.forEach((err) => {
          errMsg[err.property] = [...Object.values(err.constraints)];
        });
        return new ValidationException(errMsg);
      },
    }),
  );

  const port = process.env.PORT || 3333;
  await app.listen(port, () =>
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix),
  );
}
bootstrap();
