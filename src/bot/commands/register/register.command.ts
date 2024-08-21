import { UsersRegisterService } from '@/bot/services/users/register.service';
import { Injectable } from '@nestjs/common';
import { Client } from 'discord.js';
import { Context, SlashCommand, SlashCommandContext } from 'necord';

@Injectable()
export class DiscordRegisterCommand {

    constructor(
        private readonly client: Client,
        private readonly usersRegister: UsersRegisterService
    ) {}

    @SlashCommand({
        name: 'register',
        description: 'Registers the user running the command.'
    })
    public async onRegister(@Context() [interaction]: SlashCommandContext) {

        await this.usersRegister.registerUser(interaction, interaction.user.id);

        return interaction.reply({ content: 'Registered?' });
    }

}