import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import configuration from './configuration';
import { GraphqlConfigService } from './graphql-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => config.get('graphql'),
      inject: [ConfigService],
    }),
  ],
  providers: [ConfigService, GraphqlConfigService],
  exports: [ConfigService, GraphqlConfigService],
})
export class GraphqlConfigModule {}
