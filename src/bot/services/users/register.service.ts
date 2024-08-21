import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { DatabaseUsersService } from '@/database/services/users.database.service';

@Injectable()
export class UsersRegisterService {

    constructor(
        private readonly config: ConfigService,
        private readonly dbUsers: DatabaseUsersService
    ) {}

    private readonly pointsFormat = '0.[0]a';

    public async registerUser(interaction: any, discordId: string) {

        await this.dbUsers.create(discordId);

        // return interaction.editReply('Done');
    }

}