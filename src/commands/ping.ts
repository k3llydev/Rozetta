import { Command, ApplicationCommandRegistry } from '@sapphire/framework';

export class PingCommand extends Command {

  public constructor(context: Command.Context, options: Command.Options) {
    super(context, {
      ...options,
      name: 'ping',
      description: 'Can you guess the result?'
    });
  }

  public override registerApplicationCommands(registry: ApplicationCommandRegistry) {
    registry.registerChatInputCommand((builder) =>
      builder
        .setName(this.name)
        .setDescription(this.description)
    );
  }

  public override chatInputRun(interaction: Command.ChatInputInteraction) {
    return interaction.reply({
      content: 'Pong!'
    });
  }

}
