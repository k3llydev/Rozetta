import { Injectable } from '@nestjs/common';
import { ActionRowBuilder, ButtonBuilder } from 'discord.js';
import { MultiverseActionsButtonsComponent } from './buttons/multiverse.buttons';
import { ServerActionsButtonsComponent } from './buttons/server.buttons';
import { MultiverseHostPartyButtonsComponent } from './buttons/hostParty.buttons';

@Injectable()
export class StartActionsComponents {

    private readonly multiverseButtons = new MultiverseActionsButtonsComponent();
    private readonly serverButtons = new ServerActionsButtonsComponent();
    private readonly hostPartyButtons = new MultiverseHostPartyButtonsComponent();

    get multiverseButtonsRow() {
        return new ActionRowBuilder<ButtonBuilder>()
            .addComponents(
                this.multiverseButtons.create
            );
    }

    get multiverseInGuildButtonsRow() {
        return new ActionRowBuilder<ButtonBuilder>()
            .addComponents(
                this.multiverseButtons.invite,
                this.multiverseButtons.lang,
                this.multiverseButtons.guild
            )
    }

    get serverActionsButtonsRow() {
        return new ActionRowBuilder<ButtonBuilder>()
            .addComponents(
                this.serverButtons.invite
            );
    }

    get multiverseHostPartyButtonsRow() {
        return new ActionRowBuilder<ButtonBuilder>()
            .addComponents(
                this.hostPartyButtons.start
            )
    }

}