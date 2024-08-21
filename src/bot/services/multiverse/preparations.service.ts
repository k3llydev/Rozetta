import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IntlService } from '@/i18n/intl.service';
// import { MultiverseManagerService } from '@/database/managers/multiverse.manager';
import { ButtonContext, ModalContext, StringSelectContext } from 'necord';
import { MultiverseMessagesService } from './messages.service';
import { DatabaseMultiversesService } from '@/database/services/multiverses.database.service';

@Injectable()
export class MultiversePreparationsService {

    constructor(
        private readonly config: ConfigService,
        private readonly intl: IntlService,
        // private readonly multiverseManager: MultiverseManagerService,
        private readonly dbMultiverses: DatabaseMultiversesService,
        private readonly multiverseMessages: MultiverseMessagesService
    ) {}

    async forCreation([ interaction ]: ButtonContext) {
        await interaction.deferReply({ ephemeral: true });

        // TODO: Check if user has permission to create multiverses
        const userMultiverses = await this.dbMultiverses.getByOwnerId(interaction.user.id);
        if(!userMultiverses || !userMultiverses.length) return interaction.editReply(this.intl.t('multiverse.create-limit-error'));

        return this.multiverseMessages.getOwnedMultiverseSelectionBox('select/multiverseCreate', userMultiverses);
    }

    async forInviting([ interaction ]: ButtonContext) {
        await interaction.deferReply({ ephemeral: true });

        const userMultiverses = await this.dbMultiverses.getByOwnerId(interaction.user.id);
        if(!userMultiverses || !userMultiverses.length) return interaction.editReply(this.intl.t('multiverse.invite-error'));

        return this.multiverseMessages.getOwnedMultiverseSelectionBox('select/multiverseInvite', userMultiverses);
    }

    async forHostingParty([ interaction ]: ButtonContext) {
        await interaction.deferReply({ ephemeral: true });

        const userMultiverses = await this.dbMultiverses.getByOwnerId(interaction.user.id);
        if(!userMultiverses || !userMultiverses.length) return interaction.editReply(this.intl.t('multiverse.host-party-error'));

        // TODO: Store timeout value in config
        // After 10 seconds, remove the option
        setTimeout(async () => {
            interaction.editReply({
                content: this.intl.t('multiverse.host-party-interaction-expired'),
                components: []
            });
        }, 10000);

        return interaction.editReply(this.multiverseMessages.getOwnedMultiverseSelectionBox('select/multiverseHostParty', userMultiverses));
    }

}