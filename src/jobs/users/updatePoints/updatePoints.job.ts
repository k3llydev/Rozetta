import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class UpdatePointsJob {

    constructor() {}

    @Cron(CronExpression.EVERY_12_HOURS)
    public async updatePoints() {
        
    }

}