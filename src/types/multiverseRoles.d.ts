import { PermissionFlagsBits } from 'discord.js';
import { MultiversePermissions } from '@/types/multiversePermissions';

export const MultiverseRolesLevels = {
    Owner: 'owner',
    Member: 'member'
};

export const MultiverseRoles = [
    {
        id: 99,
        level: MultiverseRolesLevels.Owner,
        permissions: {
            channels: {},
            management: Object.values(MultiversePermissions)
        }
    },
    {
        id: 1,
        level: MultiverseRolesLevels.Member,
        permissions: {
            channels: {
                notifications: {
                    text: {
                        allow: [],
                        deny: []
                    },
                    voice: {
                        allow: [],
                        deny: []
                    }
                },
                management: {
                    text: {
                        allow: [],
                        deny: []
                    },
                    voice: {
                        allow: [],
                        deny: []
                    }
                },
                general: {
                    text: {
                        allow: [],
                        deny: []
                    },
                    voice: {
                        allow: [],
                        deny: []
                    }
                }
            },
            management: []
        }
    }
];
