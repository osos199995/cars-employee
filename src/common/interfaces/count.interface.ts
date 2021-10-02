import { Field, InterfaceType } from '@nestjs/graphql';

@InterfaceType('countInterface')
export abstract class CountInterface {
  @Field()
  count: number;
}
