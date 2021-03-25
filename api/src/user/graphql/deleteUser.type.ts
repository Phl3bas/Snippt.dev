import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('deleteUser')
export class DeleteUserType {
  @Field(() => ID)
  id: string;
}
