import { Args, Mutation, Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { GetSnippetArgs } from './dto/args/get-snippet.args';
import { GetSnippetsArgs } from './dto/args/get-snippets.args';
import { CreateSnippetInput } from './dto/input/createSnippet.input';
import { DeleteSnippetInput } from './dto/input/deleteSnippetInput';
import { Snippet } from './entities/snippet.entity';
import { SnippetType } from './graphql/snippet.type';
import { DeleteSnippetType } from './graphql/deleteSnippet.type';
import { SnippetService } from './snippet.service';
import { UpdateSnippetInput } from './dto/input/updateSnippet.input';

@Resolver(() => SnippetType)
export class SnippetResolver {
  constructor(private readonly snippetService: SnippetService) {}

  @Query(() => SnippetType, { name: 'snippet', nullable: true })
  public async getSnippet(
    @Args() getSnippetArgs: GetSnippetArgs,
  ): Promise<Snippet> {
    return this.snippetService.getSnippet(getSnippetArgs);
  }

  @Query(() => [SnippetType], { name: 'snippets', nullable: 'items' })
  public async getSnippets(
    @Args() getSnippetsArgs: GetSnippetsArgs,
  ): Promise<Snippet[]> {
    return this.snippetService.getSnippets(getSnippetsArgs);
  }

  @Query(() => [SnippetType], { name: 'allSnippets', nullable: 'items' })
  public async getAllSnippets(): Promise<Snippet[]> {
    return this.snippetService.getAllSnippets();
  }

  @Mutation(() => SnippetType)
  public async createSnippet(
    @Args('createSnippetData', { type: () => CreateSnippetInput })
    createSnippetData: CreateSnippetInput,
  ): Promise<Snippet> {
    return this.snippetService.createSnippet(createSnippetData);
  }

  @Mutation(() => DeleteSnippetType)
  public async deleteSnippet(
    @Args('deleteSnippetData', { type: () => DeleteSnippetInput })
    deleteSnippetData: DeleteSnippetInput,
  ): Promise<DeleteSnippetInput> {
    return this.snippetService.deleteSnippet(deleteSnippetData);
  }

  @Mutation(() => SnippetType)
  public async updateSnippet(
    @Args('updateSnippetData', { type: () => UpdateSnippetInput })
    updateSnippetData: UpdateSnippetInput,
  ): Promise<Snippet> {
    return this.snippetService.updateSnippet(updateSnippetData);
  }
}
