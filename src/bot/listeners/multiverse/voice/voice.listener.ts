import { Injectable } from '@nestjs/common';
import { ContextOf, Ctx, On } from 'necord';

import { ConfigService } from '@nestjs/config';
import { MultiverseMessagesService } from '@/bot/services/multiverse/messages.service';
// import { MultiverseManagerService } from '@/database/managers/multiverse.manager';
import { MultiversePreparationsService } from '@/bot/services/multiverse/preparations.service';

@Injectable()
export class MultiverseVoiceListener {

    constructor(
        private readonly config: ConfigService,
        // private readonly multiverseManager: MultiverseManagerService,
        private readonly multiverseMessages: MultiverseMessagesService,
        private readonly multiversePreparations: MultiversePreparationsService
    ) {}

    private get mainGuildId() {
        return this.config.get<string>('multiverse.mainGuildId');
    }

    private get partyHostChannelId() {
        return '1159795826076426341'; // TODO: Save ID in database + cache
    }

    @On('voiceStateUpdate')
    public async onJoinVoiceChannel(
        @Ctx() [ _, nextState ]: ContextOf<'voiceStateUpdate'>
    ) {
        if(!nextState) return;
        if(nextState.guild.id !== this.mainGuildId) return;
        if(nextState.channel.id !== this.partyHostChannelId) return;

        // this.multiversePreparations.forHostingParty([])

        // const userMultiverses = await this.multiverseManager.getByOwnerId(nextState.member.user.id);
        // if(!userMultiverses.length) return; // TODO: If user has no multiverses, consider sending a message telling the user

        // await nextState.channel.send(this.multiverseMessages.getOwnedMultiverseSelectionBox('select/multiverseHostParty', userMultiverses));
    }

}