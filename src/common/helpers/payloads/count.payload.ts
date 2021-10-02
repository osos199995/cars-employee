import { Field, ObjectType } from '@nestjs/graphql';
import { CountInterface } from '../../interfaces/count.interface';

@ObjectType('countPayload', { implements: CountInterface })
export class CountPayload implements CountInterface {
  @Field()
  count: number;
}
