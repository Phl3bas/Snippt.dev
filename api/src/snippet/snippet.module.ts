import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Snippet } from './entities/snippet.entity';
import { SnippetResolver } from './snippet.resolver';
import { SnippetService } from './snippet.service';

@Module({
  imports: [TypeOrmModule.forFeature([Snippet])],
  providers: [SnippetService, SnippetResolver],
})
export class SnippetModule {}
