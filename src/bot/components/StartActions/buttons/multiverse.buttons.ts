import { ButtonBuilder, ButtonStyle } from 'discord.js';

export class MultiverseActionsButtonsComponent {

    get create() {
        return new ButtonBuilder()
            .setCustomId('click/createMultiverse')
            .setLabel('Create multiverse')
            .setStyle(ButtonStyle.Primary);
    }

    get invite() {
        return new ButtonBuilder()
            .setCustomId('click/inviteMultiverse')
            .setLabel('Invite to multiverse')
            .setStyle(ButtonStyle.Primary)
    }

    get lang() {
        return new ButtonBuilder()
            .setCustomId('click/changeMultiverseLanguage')
            .setLabel('Change language')
            .setStyle(ButtonStyle.Primary)
    }

    get guild() {
        return new ButtonBuilder()
            .setCustomId('click/changeMultiverseGuild')
            .setLabel('Change main guild')
            .setStyle(ButtonStyle.Primary)
    }

}
