import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './configuration';
import { GraphqlConfigService } from './graphql-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  providers: [ConfigService, GraphqlConfigService],
  exports: [ConfigService, GraphqlConfigService],
})
export class GraphqlConfigModule {}
