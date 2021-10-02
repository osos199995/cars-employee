import { EntityRepository, Repository } from 'typeorm';
import { EmployeeEntity } from './entities/empolyee.entity';

@EntityRepository(EmployeeEntity)
export class EmployeeRepository extends Repository<EmployeeEntity> {
  async employee(employeeId: string): Promise<EmployeeEntity> {
    return this.findOne({ employeeId });
  }

  async employees(): Promise<EmployeeEntity[]> {
    const result = this.find({});
    return await result;
  }
}
