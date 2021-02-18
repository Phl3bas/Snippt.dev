import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConfigService {
  constructor(private configService: ConfigService) {}
  get host(): string {
    return this.configService.get<string>('database.host');
  }
  get port(): number {
    return this.configService.get<number>('database.port');
  }
  get username(): string {
    return this.configService.get<string>('database.username');
  }
  get password(): string {
    return this.configService.get<string>('database.password');
  }
  get database(): string {
    return this.configService.get<string>('database.database');
  }
  get type(): string {
    return this.configService.get<string>('database.type');
  }
  get autoLoadEntities(): boolean {
    return this.configService.get<boolean>('database.autoLoadEntities');
  }
}
