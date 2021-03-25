import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Snippet')
export class SnippetType {
  @Field(() => ID)
  id: string;
  @Field(() => String)
  title: string;
  @Field(() => String)
  created_at: string;
  @Field(() => String)
  content: string;
  @Field(() => String)
  language: string;
  @Field(() => String, { nullable: true })
  notes?: string;
}
