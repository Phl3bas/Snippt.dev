import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateSnippetInput } from './dto/input/createSnippet.input';
import { GetSnippetArgs } from './dto/args/get-snippet.args';
import { GetSnippetsArgs } from './dto/args/get-snippets.args';
import { InjectRepository } from '@nestjs/typeorm';
import { Snippet } from './entities/snippet.entity';
import { Repository } from 'typeorm';
import { DeleteSnippetInput } from './dto/input/deleteSnippetInput';
import { UpdateSnippetInput } from './dto/input/updateSnippet.input';

@Injectable()
export class SnippetService {
  constructor(
    @InjectRepository(Snippet) private snippetRepository: Repository<Snippet>,
  ) {}

  /**
   * createSnippet
   * @description takes in createsnippetinput and creates a snippet entry
   *
   * @param createSnippetData: {title: string, content: string, lanaguage: string, notes? string}
   * @returns Created Snippet
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
   * deleteSnippet
   */
  public async deleteSnippet(
    deleteSnippetData: DeleteSnippetInput,
  ): Promise<DeleteSnippetInput> {
    const result = await this.snippetRepository.delete(deleteSnippetData.id);
    if (result.affected === 0) {
      throw new NotFoundException(
        `Snippet with ID: ${deleteSnippetData.id} Not Found!`,
      );
    }

    return deleteSnippetData;
  }

  /**
   * updateSnippet
   */
  public async updateSnippet(
    updateSnippetData: UpdateSnippetInput,
  ): Promise<Snippet> {
    const { id, ...data } = updateSnippetData;
    // .where('id = :id', { id })
    const result = await this.snippetRepository
      .createQueryBuilder('snippet')
      .update(Snippet)
      .set(data)
      .whereInIds(id)
      .returning(['id', 'content', 'title', 'created_at', 'notes', 'language'])
      .updateEntity(true)
      .execute();

    if (result.affected === 0) {
      throw new NotFoundException(`Snippet with ID: ${id} Not Found!`);
    }

    return result.raw[0];
  }

  /**
   * getSnippet
   * @description Takes in getSnippet args {id: string} and returns a snippet
   * @params getSnippetArgs:  {id: string}
   *
   */
  public async getSnippet(getSnippetArgs: GetSnippetArgs): Promise<Snippet> {
    return await this.snippetRepository.findOne({
      id: getSnippetArgs.id,
    });
  }

  /**
   * getSnippets
   */
  public async getSnippets(
    getSnippetsArgs: GetSnippetsArgs,
  ): Promise<Snippet[]> {
    return await this.snippetRepository.findByIds(getSnippetsArgs.ids);
  }

  /**
   * getAllSnippets
   */
  public async getAllSnippets(): Promise<Snippet[]> {
    const f = await this.snippetRepository.find({
      order: {
        title: 'ASC',
        id: 'DESC',
      },
    });

    return f;
  }
}
