import { HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client } from 'discord.js';

import { HttpException } from '@nestjs/common/exceptions';
// import { MultiverseManagerService } from '@/database/managers/multiverse.manager';

import { POSTSendNotificationDTO } from '@/api/dtos/sendNotification';

@Injectable()
export class MultiverseService {

    constructor(
        private readonly client: Client,
        private readonly config: ConfigService,
        // private readonly multiverseManager: MultiverseManagerService
    ) {}

    private get mainGuildId() {
        return this.config.get('discord.mainGuildId');
    }

    sendNotification({ multiverseId, message }: POSTSendNotificationDTO) {
        // const guild = this.multiverseManager.getById(multiverseId);
        // if(!guild) throw new HttpException({ message: 'The provided multiverse was not found' }, HttpStatus.BAD_REQUEST);
    }

}