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

    private get multiversesConfig() {
        return this.database.multiversesConfig;
    }

    getLocale(multiverseId: string) {
        return this.multiversesConfig.findFirst({
            where: {
                multiverseId
            }
        });
    }

}
