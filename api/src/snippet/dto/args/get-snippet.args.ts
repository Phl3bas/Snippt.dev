import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@ArgsType()
export class GetSnippetArgs {
  @Field()
  @IsUUID()
  @IsNotEmpty()
  id: string;
}
