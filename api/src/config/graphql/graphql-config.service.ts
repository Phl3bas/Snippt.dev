import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GraphqlConfigService {
  constructor(private configService: ConfigService) {}
  get playground(): string {
    return this.configService.get<string>('graphql.playground');
  }
  get autoSchemaFile(): number {
    return this.configService.get<number>('graphql.autoSchemaFile');
  }
  get path(): string {
    return this.configService.get<string>('graphql.path');
  }
}
