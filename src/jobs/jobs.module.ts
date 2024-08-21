import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

// Jobs to be executed
import { UpdatePointsJobModule } from './users/updatePoints/updatePoints.job.module';

@Module({
    imports: [
        ScheduleModule.forRoot(),
        UpdatePointsJobModule
    ]
})
export class JobsModule {}
