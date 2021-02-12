import { Module } from '@nestjs/common';
import { DatabaseConfigModule } from './database/database-config.module';
import { GraphqlConfigModule } from './graphql/graphql-config.module';

@Module({
  imports: [DatabaseConfigModule, GraphqlConfigModule],
  exports: [DatabaseConfigModule, GraphqlConfigModule],
})
export class AppConfigModule {}
