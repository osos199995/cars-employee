import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/app/config.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MongoDatabaseProviderModule } from './providers/database/mongo/provider.module';
import { CarModule } from './models/car/car.module';
import { CarController } from './models/car/car.controller';
@Module({
  imports: [AppConfigModule, MongoDatabaseProviderModule, CarModule],
  controllers: [CarController],
})
export class AppModule {}
