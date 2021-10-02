import {
  BaseEntity,
  Column,
  Entity,
  ObjectIdColumn,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class EmployeeEntity extends BaseEntity {
  @ObjectIdColumn()
  _id: string;
  @PrimaryColumn()
  employeeId: string;
  @Column()
  name: string;
  @Column()
  position: string;
  @Column()
  age: number;
}
