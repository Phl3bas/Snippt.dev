import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigModule } from './config/database/database-config.module';
import { GraphqlConfigModule } from './config/graphql/graphql-config.module';

import { SnippetModule } from './snippet/snippet.module';

@Module({
  imports: [
    DatabaseConfigModule,

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
    }),
    GraphqlConfigModule,
    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => config.get('graphql'),
      inject: [ConfigService],
    }),
    SnippetModule,
  ],
})
export class AppModule {
  constructor() {}
}
