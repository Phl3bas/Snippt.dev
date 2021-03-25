import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('deleteSnippet')
export class DeleteSnippetType {
  @Field(() => ID)
  id: string;
}
