import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateSnippetInput {
  @Field(() => String)
  @IsNotEmpty()
  title: string;

  @Field(() => String)
  @IsNotEmpty()
  content: string;

  @Field(() => String)
  @IsNotEmpty()
  language: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  notes?: string;
}
