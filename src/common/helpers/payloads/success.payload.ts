import { Field, ObjectType } from '@nestjs/graphql';
import { ResponseInterface } from '../../interfaces/response.interface';

@ObjectType('successPayload', { implements: ResponseInterface })
export class SuccessPayload implements ResponseInterface {
  @Field()
  message: string;
}
