import { GuildChannel } from 'discord.js';
import { ChannelOption, StringOption } from 'necord';
import { SetupService } from '../services/setup/setup.service';

export class SetupStartMessageCommandOptions {

    @StringOption({
        name: 'type',
        description: 'The message that should be sent',
        required: true,
        choices: SetupService.availableMessages.map(message => ({
            name: message.label,
            value: message.id
        }))
    })
    type: string;

    @ChannelOption({
        name: 'channel',
        description: 'Channel where the setup should be applied',
        required: true
    })
    channel: GuildChannel;

}
