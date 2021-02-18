import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateSnippetInput } from './dto/input/createSnippet.input';
import { GetSnippetArgs } from './dto/args/get-snippet.args';
// import { GetSnippetsArgs } from './dto/args/get-snippets.args';
import { InjectRepository } from '@nestjs/typeorm';
import { Snippet } from './entities/snippet.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SnippetService {
  constructor(
    @InjectRepository(Snippet) private snippetRepository: Repository<Snippet>,
  ) {}

  /**
   * createSnippet
   *
   */
  public async createSnippet(
    createSnippetData: CreateSnippetInput,
  ): Promise<Snippet> {
    const snippet = this.snippetRepository.create({
      id: uuid(),
      created_at: new Date().toISOString(),
      ...createSnippetData,
    });

    return await this.snippetRepository.save(snippet);
  }

  /**
   * getSnippet
   */
  public async getSnippet(getSnippetArgs: GetSnippetArgs): Promise<Snippet> {
    return await this.snippetRepository.findOne({
      id: getSnippetArgs.id,
    });
  }

  // /**
  //  * getSnippets
  //  */
  // public async getSnippets(getSnippetsArgs: GetSnippetsArgs): Promise<any> {
  //   return getSnippetsArgs.ids.map((id) => this.getSnippet({ id }));
  // }
}
