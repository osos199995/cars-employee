import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarRepository } from './car.repository';
import { CarController } from './car.controller';
import { EmployeeRepository } from '../employee/employee.repository';
import { AccessCardRepository } from '../access-card/access-card.repository';
import { HighWayRepository } from "../highway-transactions/high-way.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CarRepository,
      EmployeeRepository,
      AccessCardRepository,
      HighWayRepository,
    ]),
  ],
  providers: [CarService, CarController],
  exports: [CarService],
})
export class CarModule {}
