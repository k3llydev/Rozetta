import * as moment from 'moment';
import { hashValue } from '@/database/security';

export const planetId = (name: string) => {
    const hashedName = hashValue(name).toUpperCase();
    const generationNumber = moment().format('YY');
    return `PID${generationNumber}${hashedName}`;
};

export const userId = (discordId: string) => {
    const hashedId = hashValue(discordId).toUpperCase();
    const generationNumber = moment().format('YY');
    return `UID${generationNumber}${hashedId}`;
};

export const guildId = (guildId: string) => {
    const hashedId = hashValue(guildId).toUpperCase();
    const generationNumber = moment().format('YY');
    return `GID${generationNumber}${hashedId}`;
};

export const memberRoleId = (roleId: number) => {
    return `RID${roleId}`
}
