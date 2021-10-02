import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// @ts-ignore
import { AppConfigService } from './config/app/config.service';
import { join } from 'path';
import { MyLogger } from './common/logger/my-logger.helper';
import { ValidationPipe } from '@nestjs/common';
const path = join(__dirname, '../../../nestProjects/mumez/src/email/template');
const logger = new MyLogger();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Get app config for cors settings and starting the app.
  app.useGlobalPipes(new ValidationPipe());
  const appConfig: AppConfigService = app.get('AppConfigService');
  await app.listen(appConfig.port);
  logger.log('application starts on port:' + appConfig.port);
}
bootstrap();
