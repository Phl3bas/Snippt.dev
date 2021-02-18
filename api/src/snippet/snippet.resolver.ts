import { Args, Mutation, Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { GetSnippetArgs } from './dto/args/get-snippet.args';
// import { GetSnippetsArgs } from './dto/args/get-snippets.args';
import { CreateSnippetInput } from './dto/input/createSnippet.input';
import { Snippet } from './entities/snippet.entity';
import { SnippetType } from './models/snippet.type';
import { SnippetService } from './snippet.service';

@Resolver((of) => SnippetType)
export class SnippetResolver {
  constructor(private readonly snippetService: SnippetService) {}

  @Query(() => SnippetType, { name: 'snippet', nullable: true })
  public getSnippet(@Args() getSnippetArgs: GetSnippetArgs): Promise<Snippet> {
    return this.snippetService.getSnippet(getSnippetArgs);
  }

  // @Query(() => [Snippet], { name: 'snippets', nullable: 'items' })
  // public getSnippets(@Args() getSnippetsArgs: GetSnippetsArgs): Snippet[] {
  //   return this.snippetService.getSnippets(getSnippetsArgs);
  // }

  @Mutation(() => SnippetType)
  public async createSnippet(
    @Args('createSnippetData', { type: () => CreateSnippetInput })
    createSnippetData: CreateSnippetInput,
  ): Promise<Snippet> {
    return this.snippetService.createSnippet(createSnippetData);
  }
}
