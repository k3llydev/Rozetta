import { Command, ApplicationCommandRegistry } from '@sapphire/framework';
import getPackageVersion from '@jsbits/get-package-version';

export class VersionCommand extends Command {

  public constructor(context: Command.Context, options: Command.Options) {
    super(context, {
      ...options,
      name: 'version',
      description: 'Obtains the current version of the bot.'
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
      content: `The current deployed version is: ${getPackageVersion()}`
    });
  }

}
