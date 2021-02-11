import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Snippet {
  @Field()
  id: string;
  @Field()
  title: string;
  @Field()
  created_at: Date;
  @Field()
  content: string;
  @Field()
  language: string;
  @Field({ nullable: true })
  notes?: string;
}
