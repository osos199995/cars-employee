import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { EmployeeEntity } from '../../models/employee/entities/empolyee.entity';

define(EmployeeEntity, (faker: typeof Faker) => {
  const employeeEntity = new EmployeeEntity();
  employeeEntity.employeeId = faker.random.uuid();
  employeeEntity.name = 'mohamed osama';
  employeeEntity.position = 'backEnd Developer';
  employeeEntity.age = 26;

  return employeeEntity;
});
