import { EntityRepository, Repository } from 'typeorm';
import { HighWayTransactionsEntity } from './entities/high-way-transactions.entity';
import { CreateCarDto } from '../car/Dto/create-car.dto';
import { CarsEntity } from '../car/entities/cars.entity';
import { v4 as uuid } from 'uuid';
import { CreateTransactionDto } from './Dto/create-transaction.dto';
import { CurrentDate } from '../../common/helpers/date.helper';
import moment from 'moment';
import { date } from 'joi';
import { CarRepository } from '../car/car.repository';
import { EmployeeRepository } from '../employee/employee.repository';
import { AccessCardRepository } from '../access-card/access-card.repository';
import { Db } from 'mongodb';
import { Inject } from '@nestjs/common';

@EntityRepository(HighWayTransactionsEntity)
export class HighWayRepository extends Repository<HighWayTransactionsEntity> {
  constructor(@Inject('DATABASE_CONNECTION') private db: Db) {
    super();
  }

  async highWayTransaction(
    highWayTransactionId: string,
  ): Promise<HighWayTransactionsEntity> {
    return this.findOne({ highWayTransactionId });
  }

  async checkTransaction(accessCardId: string): Promise<boolean> {
    const transactions= await this.find({
      where:{
        accessCardId:accessCardId,
      }
    });
    for (let i = 0; i < transactions.length; i++) {
      if (new Date(transactions[i].createdAt).getMinutes() == new Date().getMinutes()){
        return false;
      }

    }
    return true;
  }

  async highWayTransactions(): Promise<HighWayTransactionsEntity[]> {
    const result = this.find({});
    return await result;
  }
  async createTransaction(
    createTransactionDto: CreateTransactionDto,
  ): Promise<HighWayTransactionsEntity> {
    const { employeeId, accessCardId, carId } = createTransactionDto;
    const HighWayTransactionsEntity = this.create();
    HighWayTransactionsEntity.employeeId = employeeId;
    HighWayTransactionsEntity.highWayTransactionId = uuid();
    HighWayTransactionsEntity.carId = carId;
    HighWayTransactionsEntity.accessCardId = accessCardId;
    HighWayTransactionsEntity.createdAt = CurrentDate();
    return HighWayTransactionsEntity.save();
  }
}
