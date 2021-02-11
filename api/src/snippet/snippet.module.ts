import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { SnippetResolver } from './snippet.resolver';
import { SnippetService } from './snippet.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: true,
      path: '___graphql',
    }),
  ],
  providers: [SnippetService, SnippetResolver],
})
export class SnippetModule {}
