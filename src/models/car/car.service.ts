import { Injectable, NotFoundException } from '@nestjs/common';
import { CarRepository } from './car.repository';
import { CreateCarDto } from './Dto/create-car.dto';
import { CarsEntity } from './entities/cars.entity';
import { UpdateCarDto } from './Dto/update-car.dto';
import { SuccessPayload } from '../../common/helpers/payloads/success.payload';
import { RegisterCarDto } from './Dto/register-car.dto';
import { EmployeeEntity } from '../employee/entities/empolyee.entity';
import { EmployeeRepository } from '../employee/employee.repository';
import { AccessCardEntity } from '../access-card/entities/access-card.entity';
import { AccessCardRepository } from '../access-card/access-card.repository';
import { HighWayRepository } from '../highway-transactions/high-way.repository';
import { CreateTransactionDto } from '../highway-transactions/Dto/create-transaction.dto';

@Injectable()
export class CarService {
  constructor(
    private carRepository: CarRepository,
    private employeeRepository: EmployeeRepository,
    private accessCardRepository: AccessCardRepository,
    private highWayRepository: HighWayRepository,
  ) {}

  async car(carId: string): Promise<CarsEntity> {
    const car = await this.carRepository.car(carId);
    if (!car) throw new NotFoundException();
    return car;
  }

  async cars(): Promise<CarsEntity[]> {
    return this.carRepository.cars();
  }

  async createCar(createCarDto: CreateCarDto): Promise<CarsEntity> {
    return await this.carRepository.createCar(createCarDto);
  }

  async deleteCar(carId: string): Promise<SuccessPayload> {
    const car: CarsEntity = await this.carRepository.car(carId);
    if (!car) throw new NotFoundException();
    await this.carRepository.deleteCar(car);
    return {
      message: 'car deleted',
    };
  }

  async updateCar(
    updateCarDto: UpdateCarDto,
    carId: string,
  ): Promise<CarsEntity> {
    const car: CarsEntity = await this.carRepository.car(carId);
    if (!car) throw new NotFoundException();
    for (const key in updateCarDto) {
      car[key] = updateCarDto[key];
    }
    return this.carRepository.updateCar(car);
  }

  async registerCar(registerCarDto: RegisterCarDto): Promise<CarsEntity> {
    const car: CarsEntity = await this.carRepository.car(registerCarDto.carId);
    const employee: EmployeeEntity = await this.employeeRepository.employee(
      registerCarDto.employeeId,
    );
    const accessCard: AccessCardEntity =
      await this.accessCardRepository.accessCard(registerCarDto.accessCardId);

    if (!car && !accessCard && employee) throw new NotFoundException();
    await this.accessCardRepository.welcomeCredit(registerCarDto.accessCardId);
    for (const key in registerCarDto) {
      car[key] = registerCarDto[key];
    }

    return this.carRepository.registerCar(car);
  }

  async gate(carId: string): Promise<CarsEntity> {
    const car: CarsEntity = await this.carRepository.car(carId);

    if (!car && car.employeeId && car.accessCardId)
      throw new NotFoundException();
    const check = await this.highWayRepository.checkTransaction(
      car.accessCardId,
    );
    if (!check) throw new NotFoundException('charged before')
    const charged = await this.accessCardRepository.charge(car.accessCardId);
    if (!charged == true)
      throw new NotFoundException('there is something wrong');
    const createTransactionDto: CreateTransactionDto = {
      carId: car.carId,
      accessCardId: car.accessCardId,
      employeeId: car.employeeId,
    };
    const transaction = await this.highWayRepository.createTransaction(
      createTransactionDto,
    );
    return this.carRepository.registerCar(car);
  }
}
