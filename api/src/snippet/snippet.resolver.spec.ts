import { Test, TestingModule } from '@nestjs/testing';
import { SnippetResolver } from './snippet.resolver';
import { SnippetService } from './snippet.service';

describe('SnippetResolver', () => {
  let resolver: SnippetResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SnippetResolver, SnippetService],
    }).compile();

    resolver = module.get<SnippetResolver>(SnippetResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
