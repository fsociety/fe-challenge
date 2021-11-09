import { Module } from '@nestjs/common';
import { PrismaService } from '../../globals/prisma.service';
import { ActivityController } from './activity.controller';
import { ActivityService } from './activity.service';

@Module({
  controllers: [ActivityController],
  providers: [PrismaService, ActivityService],
})
export class ActivityModule {}
