import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { ConfigService } from './modules/config/config.service';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  const config = configService.envConfig;
  // const prismaService: PrismaService = app.get(PrismaService);
  // prismaService.enableShutdownHooks(app);
  app.enableCors({ origin: config.CORS_WHITELIST.split(',') });
  await app.listen(config.PORT);
}

bootstrap();
