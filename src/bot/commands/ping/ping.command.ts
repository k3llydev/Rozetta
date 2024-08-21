import { Injectable } from '@nestjs/common';
import { Client } from 'discord.js';
import { Context, SlashCommand, SlashCommandContext } from 'necord';

@Injectable()
export class DiscordPingCommand {

    constructor(
        private readonly client: Client
    ) {}

    @SlashCommand({
        name: 'ping',
        description: 'Ping command!'
    })
    public async onPing(@Context() [interaction]: SlashCommandContext) {
        // const member = interaction.guild.members.cache.get(interaction.user.id);
        // console.log('ping member', member)
        // this.client.emit('guildMemberAdd', member);
        return interaction.reply({ content: 'Pong!' });
    }

}