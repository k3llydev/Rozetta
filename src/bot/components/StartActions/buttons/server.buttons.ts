import { ButtonBuilder, ButtonStyle } from 'discord.js';

export class ServerActionsButtonsComponent {

    get invite() {
        return new ButtonBuilder()
            .setCustomId('click/inviteServer')
            .setLabel('Invite')
            .setStyle(ButtonStyle.Secondary);
    }

}
