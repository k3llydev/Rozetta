import { Module } from '@nestjs/common';

import { UpdatePointsJob } from './updatePoints.job';

@Module({
    providers: [
        UpdatePointsJob
    ]
})
export class UpdatePointsJobModule {}
