import { Test, TestingModule } from '@nestjs/testing';
import { SnippetService } from './snippet.service';

describe('SnippetService', () => {
  let service: SnippetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SnippetService],
    }).compile();

    service = module.get<SnippetService>(SnippetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should have a getSnippet method', () => {
    expect(service).toHaveProperty('getSnippet');
  });

  it('should have a getSnippets method', () => {
    expect(service).toHaveProperty('getSnippets');
  });

  it('should have a createSnippet method', () => {
    expect(service).toHaveProperty('createSnippet');
  });

  it('should create a snippet', () => {
    const result = service.createSnippet({
      title: 'Test1',
      content: 'Content',
      language: 'JS',
    });

    expect(result).toBeDefined();
  });
});
