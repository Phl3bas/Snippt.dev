import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/appconfig.module';
import { SnippetModule } from './snippet/snippet.module';

@Module({
  imports: [AppConfigModule, SnippetModule],
})
export class AppModule {}
