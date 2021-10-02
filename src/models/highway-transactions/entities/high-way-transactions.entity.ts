import {
  BaseEntity,
  Column,
  Entity,
  ObjectIdColumn,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class HighWayTransactionsEntity extends BaseEntity {
  @ObjectIdColumn()
  _id: string;
  @PrimaryColumn()
  highWayTransactionId: string;
  @Column()
  accessCardId: string;
  @Column()
  carId: string;
  @Column()
  employeeId: string;
  @Column()
  createdAt: string;
}
