import { Module } from '@nestjs/common';
import { SnippetResolver } from './snippet.resolver';
import { SnippetService } from './snippet.service';

@Module({
  providers: [SnippetService, SnippetResolver],
})
export class SnippetModule {}
