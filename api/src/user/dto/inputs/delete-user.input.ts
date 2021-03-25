import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class DeleteUserInput {
  @Field()
  @IsUUID()
  @IsNotEmpty()
  id: string;
}
