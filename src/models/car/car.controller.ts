import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './Dto/create-car.dto';
import { CarsEntity } from './entities/cars.entity';
import { UpdateCarDto } from './Dto/update-car.dto';
import { RegisterCarDto } from './Dto/register-car.dto';
import { GetCarDto } from "./Dto/get-car.dto";

@Controller('car')
export class CarController {
  constructor(private carService: CarService) {}
  @Get()
  async findAll(): Promise<CarsEntity[]> {
    return await this.carService.cars();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<CarsEntity> {
    return await this.carService.car(params.id);
  }

  @Post()
  async create(@Body() createCategoryDto: CreateCarDto) {
    return await this.carService.createCar(createCategoryDto);
  }

  @Patch(':id')
  async update(@Body() updateCarDto: UpdateCarDto, @Param() params) {
    return await this.carService.updateCar(updateCarDto, params.id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.carService.deleteCar(id);
  }
  @Post('register')
  async register(@Body() registerCarDto: RegisterCarDto) {
    return await this.carService.registerCar(registerCarDto);
  }

  @Post('gate')
  async Gate(@Body() getCarDto: GetCarDto) {
    return await this.carService.gate(getCarDto.carId);
  }
}
