import { EntityRepository, Repository } from 'typeorm';
import { CarsEntity } from './entities/cars.entity';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './Dto/create-car.dto';

@EntityRepository(CarsEntity)
export class CarRepository extends Repository<CarsEntity> {
  async car(carId: string): Promise<CarsEntity> {
    return await this.findOne({ carId });
  }

  async cars(): Promise<CarsEntity[]> {
    const result = this.find({});
    return await result;
  }

  async createCar(createCarDto: CreateCarDto): Promise<CarsEntity> {
    const { brand, model, plateNumber } = createCarDto;
    const CarsEntity = this.create();
    CarsEntity.brand = brand;
    CarsEntity.carId = uuid();
    CarsEntity.model = model;
    CarsEntity.plateNumber = plateNumber;
    return CarsEntity.save();
  }
  async deleteCar(car: CarsEntity): Promise<CarsEntity> {
    return car.remove();
  }

  async updateCar(car: CarsEntity): Promise<CarsEntity> {
    return car.save();
  }

  async registerCar(car: CarsEntity): Promise<CarsEntity> {
    return car.save();
  }
}
