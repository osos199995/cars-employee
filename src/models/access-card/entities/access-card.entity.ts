import {
  BaseEntity,
  Column,
  Entity,
  ObjectIdColumn,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class AccessCardEntity extends BaseEntity {
  @ObjectIdColumn()
  _id: string;
  @PrimaryColumn()
  accesscardId: string;
  @Column()
  credit: number;
}
