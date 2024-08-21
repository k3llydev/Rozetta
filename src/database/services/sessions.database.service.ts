import { Injectable } from '@nestjs/common';
import * as Generators from '../generators';
import { DatabaseConnectionService } from '../services/connection.database.service';

@Injectable()
export class DatabaseSessionsService {

    constructor(
        private readonly database: DatabaseConnectionService
    ) {}

    create(discordId: string) {
        return this.database.httpSessions.create({
            data: {
                id: '', // Session id,
                accessToken: '',
                refreshToken: '',
                expiresAt: new Date(),
                user: {
                    connect: {
                        discordId
                    }
                }
            }
        });
    }

    findByUserDiscordId(discordId: string, accessToken: string) {
        return this.database.httpSessions.findUnique({
            where: {
                accessToken,
                user: {
                    discordId
                }
            }
        });
    }

}
