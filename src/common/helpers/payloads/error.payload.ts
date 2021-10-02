import { Field, ObjectType } from '@nestjs/graphql';
import { ResponseInterface } from '../../interfaces/response.interface';

@ObjectType('errorPayload', { implements: ResponseInterface })
export class ErrorPayload implements ResponseInterface {
  @Field()
  message: string;
  @Field()
  code: number;
  @Field()
  context: string;
}
