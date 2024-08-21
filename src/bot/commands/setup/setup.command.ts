import { Context, Options, SlashCommandContext, Subcommand, createCommandGroupDecorator } from 'necord';
import { SetupStartMessageCommandOptions } from '@/bot/dtos/setup.dto';

import CONSTANTS from '@/config/constants';
import { SetupService } from '@/bot/services/setup/setup.service';

const SetupCommand = createCommandGroupDecorator({
    name: 'setup',
    description: 'Prepares different setups for the main guild',
    guilds: [ CONSTANTS.mainGuildId ]
});

@SetupCommand()
export class DiscordSetupCommand {

    constructor(
        private readonly setup: SetupService
    ) {}

    @Subcommand({
        name: 'message',
        description: 'Setups different messages to interact with the bot'
    })
    public async setupStartMessage(
        @Context() [ interaction ]: SlashCommandContext,
        @Options() { type, channel }: SetupStartMessageCommandOptions
    ) { return this.setup.setupMessage(interaction, type, channel); }

    // @UseInterceptors(MultiverseConfigInterceptor)
    // @Subcommand({
    //     name: 'config',
    //     description: 'Different configurations for the multiverse'
    // })
    // public async configureMultiverse(
    //     @Context() [ interaction ]: SlashCommandContext,
    //     @Options() { option, value }: ConfigMultiverseCommandOptions
    // ) { return this.multiverseConfig.setConfig(interaction, option, value); }

    // @Subcommand({
    //     name: 'create',
    //     description: 'Creates a new multiverse'
    // })
    // public async createMultiverse(
    //     @Context() [ interaction ]: SlashCommandContext,
    //     @Options() { name }: CreateMultiverseCommandOptions
    // ) { return this.multiverse.createMultiverse(interaction, name); }

    // @Subcommand({
    //     name: 'invite',
    //     description: 'Invites someone to the multiverse where command is executed'
    // })
    // public async inviteToMultiverse(
    //     @Context() [ interaction ]: SlashCommandContext,
    //     @Options() { username }: InviteMultiverseCommandOptions
    // ) { return this.multiverseInvite.invite(interaction, username); }

    // @Subcommand({
    //     name: 'uninvite',
    //     description: 'Invites someone to the multiverse where command is executed'
    // })
    // public async uninviteToMultiverse(
    //     @Context() [ interaction ]: SlashCommandContext,
    //     @Options() { username }: InviteMultiverseCommandOptions
    // ) { return this.multiverseInvite.uninvite(interaction, username); }

    // @Subcommand({
    //     name: 'member',
    //     description: 'Executes an action over a multiverse member'
    // })
    // public async memberActionMultiverse(
    //     @Context() [ interaction ]: SlashCommandContext,
    //     @Options() { action, user }: MemberMultiverseCommandOptions
    // ) { return this.multiverse.memberActionMultiverse(interaction, action, user); }

}