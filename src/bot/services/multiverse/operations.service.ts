import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IntlService } from '@/i18n/intl.service';
// import { MultiverseManagerService } from '@/database/managers/multiverse.manager';
import { ButtonContext, ModalContext, StringSelectContext } from 'necord';
// import { MultiverseMemberRolesManagerService } from '@/database/managers/multiverseMemberRoles.manager';
import { MultiverseChannelsService } from './channels.service';
import { DatabaseMultiversesService } from '@/database/services/multiverses.database.service';
import { DatabaseUsersService } from '@/database/services/users.database.service';

@Injectable()
export class MultiverseOperationsService {

    constructor(
        private readonly config: ConfigService,
        private readonly intl: IntlService,
        private readonly multiverseChannels: MultiverseChannelsService,
        private readonly dbMultiverses: DatabaseMultiversesService,
        private readonly dbUsers: DatabaseUsersService
        // private readonly multiverseManager: MultiverseManagerService,
        // private readonly multiverseMembersManager: MultiverseMemberRolesManagerService,
    ) {}

    private isNameValid(name: string) {
        const { minLength, maxLength } = this.config.get('multiverse.limits.naming', { maxLength: 20, minLength: 5 });
        return minLength < name.length && name.length < maxLength;
    }

    async create([ interaction ]: ModalContext, name: string) {
        await interaction.deferReply({ ephemeral: true });

        if(!this.isNameValid(name)) return interaction.editReply({
            content: this.intl.t('multiverse.error-invalid-multiverse-name', {
                min: this.config.get('multiverse.limits.naming.minLength'),
                max: this.config.get('multiverse.limits.naming.maxLength')
            })
        });

        // TODO: Validate special characters from name

        const multiverseByName = await this.dbMultiverses.isNameUsed(name);
        if(multiverseByName) return interaction.editReply(this.intl.t('multiverse.error-name-in-use', { name }));

        const allowedCreationsPerUser = this.config.get<number>('multiverse.limits.creation.perUser', 1);
        const userMultiverses = await this.dbMultiverses.getByOwnerId(interaction.user.id);
        if(userMultiverses.length >= allowedCreationsPerUser) return interaction.editReply({
            content: this.intl.t('multiverse.error-cant-create-more-multiverses', { max: allowedCreationsPerUser })
        });

        const registeredUser = await this.dbUsers.getByDiscordId(interaction.user.id);
        if(!registeredUser) return interaction.editReply(this.intl.t('multiverse.user-not-registered'));

        const multiverse = await this.dbMultiverses.create({ name, ownerId: registeredUser.id });
        if(!multiverse) return interaction.editReply(this.intl.t('multiverse.creation-error'));

        // const multiverseUser = await 

        return interaction.editReply(this.intl.t('multiverse.create-success', { name }));
    }

    async startHostParty([ interaction ]: StringSelectContext, multiverseId: string) {
        await interaction.deferReply({ ephemeral: true });

        // const multiverseMembers = await this.multiverseMembersManager.getByMultiverseId(multiverseId);
        // console.log(multiverseMembers);

        // const multiverseInfo = await this.multiverseMembersManager.getByMultiverseIdJoinInfo(multiverseId);
        // if(!multiverseInfo) return interaction.editReply(this.intl.t('multiverse.host-party-data-error'));

        // console.log(multiverseInfo);

        // const multiverseInfo = await this.multiverseManager.getById(multiverseId);
        // if(!multiverseInfo) return interaction.editReply(this.intl.t('multiverse.host-party-multiverse-error'));

        // const multiverseMembers = await this.multiverseMembersManager.getByMultiverseId(multiverseId);
        // if(!multiverseMembers.length) return interaction.editReply(this.intl.t('multiverse.host-party-member-error'));

        // await this.multiverseChannels.createHostParty(interaction.guild, multiverseInfo[0]., []);

        return interaction.editReply(this.intl.t('multiverse.host-party-created'));
    }

}
