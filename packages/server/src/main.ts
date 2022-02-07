import { NestFactory } from '@nestjs/core';

import { APIModule } from './modules/api.module';
import { ConfigService } from './modules/config/config.service';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(APIModule);
  const configService = app.get<ConfigService>(ConfigService);
  const config = configService.envConfig;
  app.enableCors({ origin: config.CORS_WHITELIST.split(',') });
  await app.listen(config.PORT);
}

bootstrap();
