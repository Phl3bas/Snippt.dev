import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetSnippetArgs {
  @Field()
  @IsNotEmpty()
  id: string;
}
