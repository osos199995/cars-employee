import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { EmployeeEntity } from '../../models/employee/entities/empolyee.entity';

export default class create implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(EmployeeEntity)().create();
  }
}
