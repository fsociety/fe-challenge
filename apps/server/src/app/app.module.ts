import { Module } from '@nestjs/common';
import { AccountModule } from './modules/account/account.module';
import { ActivityModule } from './modules/activity/activity.module';

@Module({
  imports: [AccountModule, ActivityModule],
})
export class AppModule {}
