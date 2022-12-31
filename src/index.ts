import * as dotenv from 'dotenv';
dotenv.config();
import { SapphireClient } from '@sapphire/framework';
import path from 'path';

const client = new SapphireClient({
    intents: ['GUILDS', 'GUILD_MESSAGES'],
    defaultPrefix: '.',
    baseUserDirectory: path.join(__dirname, '../build/')
});

client.login(process.env.DISCORD_BOT_TOKEN).then(() => console.log('Logged in.'));
