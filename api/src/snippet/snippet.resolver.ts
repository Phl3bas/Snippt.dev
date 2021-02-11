import { Args, Mutation, Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { GetSnippetArgs } from './dto/args/get-snippet.args';
import { GetSnippetsArgs } from './dto/args/get-snippets.args';
import { CreateSnippetInput } from './dto/input/createSnippet.input';
import { Snippet } from './models/snippet.model';
import { SnippetService } from './snippet.service';

@Resolver(() => Snippet)
export class SnippetResolver {
  constructor(private readonly snippetService: SnippetService) {}

  @Query(() => Snippet, { name: 'snippet', nullable: true })
  public getSnippet(@Args() getSnippetArgs: GetSnippetArgs): Snippet {
    return this.snippetService.getSnippet(getSnippetArgs);
  }

  @Query(() => [Snippet], { name: 'snippets', nullable: 'items' })
  public getSnippets(@Args() getSnippetsArgs: GetSnippetsArgs): Snippet[] {
    return this.snippetService.getSnippets(getSnippetsArgs);
  }

  @Mutation(() => Snippet)
  public createSnippet(
    @Args('createSnippetData') createSnippetData: CreateSnippetInput,
  ): Snippet {
    return this.snippetService.createSnippet(createSnippetData);
  }
}
