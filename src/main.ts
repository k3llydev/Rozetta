import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as winston from 'winston';
import { WinstonModule, utilities as WinstonUtils } from 'nest-winston';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      instance: winston.createLogger({
        transports: [
          new winston.transports.Console({
            format: winston.format.combine(
              winston.format.timestamp(),
              winston.format.ms(),
              WinstonUtils.format.nestLike('TheRealMultiverse', {
                colors: true,
                prettyPrint: true
              })
            )
          })
        ]
      })
    })
  });
  await app.listen(process.env.API_PORT || 3000);
}
bootstrap();
