import { Injectable } from '@nestjs/common';
import * as Generators from '@/database/generators';
import { DatabaseConnectionService } from '@/database/services/connection.database.service';

type CreateProps = {
    name: string;
    ownerId: string;
}

@Injectable()
export class DatabaseMultiversesConfigService {

    constructor(
        private readonly database: DatabaseConnectionService
    ) {}

    private get planetsConfig() {
        return this.database.planetsConfig;
    }

    getLocale(planetId: string) {
        return this.planetsConfig.findFirst({
            where: {
                planetId
            }
        });
    }

}
