import { Injectable } from '@nestjs/common';
import * as Generators from '../generators';
import { DatabaseConnectionService } from '../services/connection.database.service';

@Injectable()
export class DatabaseUsersService {

    constructor(
        private readonly database: DatabaseConnectionService
    ) {}

    create(discordId: string) {
        return this.database.users.create({
            data: {
                id: Generators.userId(discordId),
                discordId,
                points: 0,
                xp: 0
            }
        });
    }

    getByDiscordId(discordId: string) {
        return this.database.users.findFirst({
            where: {
                discordId
            }
        });
    }

}
