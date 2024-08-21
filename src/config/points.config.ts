import { registerAs } from '@nestjs/config';

export default registerAs('points', () => ({
    createMultiverse: 0,
    addBotToGuild: 10,
    inviteToServer: 50,
    inviteToMultiverse: 50
}));
