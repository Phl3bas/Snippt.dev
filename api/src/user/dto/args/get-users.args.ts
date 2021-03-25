import { ArgsType, Field } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@ArgsType()
export class GetUsersArgs {
  @Field(()=>[String])
  @IsUUID('all', {each: true})
  ids:string[];
}
