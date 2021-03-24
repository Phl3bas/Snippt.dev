import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/appconfig.module';
import { SnippetModule } from './snippet/snippet.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AppConfigModule, SnippetModule, UserModule],
})
export class AppModule {}
