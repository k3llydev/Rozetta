import { HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client } from 'discord.js';
import { HttpException } from '@nestjs/common/exceptions';

import { DatabaseUsersService } from '@/database/services/users.database.service';
import { POSTCreateUserDTO } from '../dtos/Users.dto';

@Injectable()
export class UsersService {

    constructor(
        private readonly client: Client,
        private readonly config: ConfigService,
        private readonly users: DatabaseUsersService
    ) {}

    register({ discordId, discordToken }: POSTCreateUserDTO) {
        // TODO: Verify discord token
        if(!discordToken)
            throw new HttpException({ message: 'Invalid discord token' }, HttpStatus.BAD_REQUEST);

        const existingUser = this.users.getByDiscordId(discordId);
        if(existingUser)
            throw new HttpException({ message: 'User already exists' }, HttpStatus.BAD_REQUEST);
        this.users.create(discordId);
    }

}