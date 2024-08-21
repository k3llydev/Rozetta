import { ButtonBuilder, ButtonStyle } from 'discord.js';

export class MultiverseHostPartyButtonsComponent {

    get start() {
        return new ButtonBuilder()
            .setCustomId('click/hostPartyStart')
            .setLabel('Host a party!')
            .setStyle(ButtonStyle.Primary);
    }

}
