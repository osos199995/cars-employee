import { Field, InterfaceType } from '@nestjs/graphql';

@InterfaceType('responseInterface')
export abstract class ResponseInterface {
  @Field()
  message: string;
}
