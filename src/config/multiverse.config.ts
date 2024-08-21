import { registerAs } from '@nestjs/config';
import constants from './constants';

export default registerAs('multiverse', () => ({
    configurations: {
        language: 'language',
        server: 'custom server'
    },
    mainGuildId: constants.mainGuildId,
    notifications: {
        colors: {
            members: {
                join: 1548800,
                leave: 600000
            }
        }
    },
    invites: {
        icons: {
            accept: '✅',
            reject: '❌',
            report: '⚠️'
        },
        lifetime: 3600
    },
    channels: {
        about: {
            id: 'about',
            label: 'about',
            emoji: '🌌',
            readonly: true,
            type: 'text'
        },
        notifications: {
            id: 'notifications',
            label: 'notifications',
            emoji: '📢',
            readonly: true,
            type: 'text'
        },
        party: {
            id: 'party',
            label: 'Name',
            emoji: '',
            type: 'voice'
        }
    },
    limits: {
        creation: {
            perUser: 3
        },
        naming: {
            maxLength: 20,
            minLength: 5
        }
    },
    // permissions: {},
    // roles: [
    //     {
    //         id: 10,
    //         label: 'multiverseRoles.owner',
    //         permissions: {
    //             channels: {
    //                 allow: [
    //                     PermissionFlagsBits.ViewChannel,
    //                     PermissionFlagsBits.KickMembers
    //                 ],
    //                 deny: []
    //             },
    //             management: Object.values(MultiversePermissions)
    //         }
    //     },
    //     {
    //         id: 1,
    //         label: 'multiverseRoles.member',
    //         permissions: {
    //             channels: {
    //                 allow: [
    //                     PermissionFlagsBits.ViewChannel
    //                 ],
    //                 deny: []
    //             },
    //             management: [

    //             ]
    //         }
    //     }
    // ]
}));
