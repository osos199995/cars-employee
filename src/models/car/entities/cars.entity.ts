import {
  BaseEntity,
  Column,
  Entity,
  ObjectIdColumn,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class CarsEntity extends BaseEntity {
  @ObjectIdColumn()
  _id: string;
  @PrimaryColumn()
  carId: string;
  @Column({ nullable: true })
  employeeId: string;
  @Column({ nullable: true })
  accessCardId: string;
  @Column()
  brand: string;
  @Column()
  model: string;
  @Column()
  plateNumber: string;
}
