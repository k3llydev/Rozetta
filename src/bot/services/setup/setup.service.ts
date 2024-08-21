import { Injectable } from '@nestjs/common';
import { BaseMessageOptions, ChatInputCommandInteraction, GuildChannel, MessageCreateOptions, MessagePayload } from 'discord.js';

import { StartActionsComponents } from '@/bot/components/StartActions/StartActions.component';


@Injectable()
export class SetupService {

    static readonly components = new StartActionsComponents();

    constructor() {}

    static get availableMessages() {
        return [
            {
                id: 'multiverse',
                label: 'Multiverse',
                message: SetupService.multiverseMessage,
                components: [
                    SetupService.components.multiverseButtonsRow
                ]
            },
            {
                id: 'server',
                label: 'Server',
                message: SetupService.serverMessage,
                components: [
                    SetupService.components.serverActionsButtonsRow
                ]
            },
            {
                id: 'host-party',
                label: 'Host party VC',
                message: SetupService.hostPartyMessage,
                components: [
                    SetupService.components.multiverseHostPartyButtonsRow
                ]
            }
        ]
    }

    async setupMessage(interaction: ChatInputCommandInteraction, type: string, channel: GuildChannel) {
        await interaction.deferReply({ ephemeral: true });

        if(!channel.isTextBased()) return interaction.editReply('channel must be text');

        const message = SetupService.availableMessages.find(message => message.id === type);
        if(!message) return interaction.editReply('Invalid message to configure');

        await channel.send(message.message(message.components));

        return interaction.editReply('sent');

    }

    static multiverseMessage(components: BaseMessageOptions['components']): MessagePayload | MessageCreateOptions {
        return {
            components,
            content: 'Multiverse actions go here'
        };
    }

    static serverMessage(components: BaseMessageOptions['components']): MessagePayload | MessageCreateOptions {
        return {
            components,
            content: 'Server info goes here'
        };
    }

    static hostPartyMessage(components: BaseMessageOptions['components']): MessagePayload | MessageCreateOptions {
        return {
            components,
            content: 'Host party options'
        };
    }

}