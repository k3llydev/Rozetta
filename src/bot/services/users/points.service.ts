import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import numeral from 'numeral';

@Injectable()
export class UserPointsService {

    constructor(
        private readonly config: ConfigService
    ) {}

    private readonly pointsFormat = '0.[0]a';

    public parsePoints(points: number) {
        return numeral(points).format(this.pointsFormat);
    }

}