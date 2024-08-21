import { Injectable } from '@nestjs/common';
import { ChannelType, Guild, PermissionResolvable, PermissionsBitField } from 'discord.js';
import { Cache } from 'cache-manager';

import { IntlService } from '@/i18n/intl.service';
// import { MultiverseMemberRolesEntity } from '@/database/entities/multiverseMemberRoles.entity';
import { MultiversePermissionsService } from './permissions.service';

@Injectable()
export class MultiverseChannelsService {

    constructor(
        private readonly intl: IntlService,
        private readonly permissions: MultiversePermissionsService
        // private readonly cache: Cache
    ) { }

    createHostParty(guild: Guild, name: string, members: any[]) { // TODO: Add type, previously it was MultiverseMemberRolesEntity
        return guild.channels.create({
            name,
            type: ChannelType.GuildVoice,
            rateLimitPerUser: 1,
            reason: `[HOST_PARTY] Created for ${members[0].multiverse.id}`,
            permissionOverwrites: [
                {
                    id: guild.roles.everyone,
                    deny: [
                        PermissionsBitField.Flags.ViewChannel
                    ]
                },
                ...members.map(member => ({
                    id: member.user.discordId,
                    ...this.permissions.getRolePermissions(member.roleId)
                }))
            ]
        });
    }

}