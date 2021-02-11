import { Injectable } from '@nestjs/common';
import { Snippet } from './models/snippet.model';
import { v4 as uuid } from 'uuid';
import { CreateSnippetInput } from './dto/input/createSnippet.input';
import { GetSnippetArgs } from './dto/args/get-snippet.args';
import { GetSnippetsArgs } from './dto/args/get-snippets.args';

@Injectable()
export class SnippetService {
  private snippets: Snippet[] = [];

  /**
   * createSnippet
   *
   */
  public createSnippet(createSnippetData: CreateSnippetInput): Snippet {
    const snippet: Snippet = {
      id: uuid(),
      created_at: new Date(),
      ...createSnippetData,
    };

    this.snippets = [...this.snippets, snippet];

    return snippet;
  }

  /**
   * getSnippet
   */
  public getSnippet(getSnippetArgs: GetSnippetArgs): Snippet {
    return this.snippets.find((snippet) => snippet.id === getSnippetArgs.id);
  }

  /**
   * getSnippets
   */
  public getSnippets(getSnippetsArgs: GetSnippetsArgs): Snippet[] {
    return getSnippetsArgs.ids.map((id) => this.getSnippet({ id }));
  }
}
