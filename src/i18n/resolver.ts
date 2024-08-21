import { CommandContext, LocaleResolver } from '@necord/localization';
import { ExecutionContext, Injectable } from '@nestjs/common';
import { NecordExecutionContext } from 'necord';
import { ConfigService } from '@nestjs/config';
import { DatabaseMultiversesConfigService } from '@/database/services/multiversesconfig.database.service';

@Injectable()
export class MultiverseIntlResolver implements LocaleResolver {

    constructor(
        private readonly config: ConfigService,
        private readonly multiverseConfig: DatabaseMultiversesConfigService
    ) {}

    resolve(context: ExecutionContext): string | string[] | undefined {
        const necordContext = NecordExecutionContext.create(context);
        const [interaction] = necordContext.getContext<CommandContext>();

        const userLang = interaction.locale;
        const guildLang = interaction.guildLocale;

        // Query database?
        // interaction.user.id;

        return userLang;
    }
}
