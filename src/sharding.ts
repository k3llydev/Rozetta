import 'dotenv/config';
import { ShardingManager } from 'discord.js';

if(!process.env.TOTAL_SHARDS)
    throw new Error('TOTAL_SHARDS environment variable is not set');

if(isNaN(+process.env.TOTAL_SHARDS))
    throw new Error('TOTAL_SHARDS environment variable is not a number');

const manager = new ShardingManager(`${__dirname}/main.js`, {
    mode: 'process',
    token: process.env.DISCORD_BOT_TOKEN,
    totalShards: +process.env.TOTAL_SHARDS
});

let SHARD_COUNT = 0;
manager.on('shardCreate', shard => {
    console.log(`[SHARD] Discord started a shard with id "${shard.id}"`);
    console.log('[SHARD] Application API exposed on port', 5000 + SHARD_COUNT);
    Object.assign(shard.env, {
        API_PORT: 5000 + SHARD_COUNT,
        SHARD_NUMBER: SHARD_COUNT + 1,
        SHARD_TOTAL: process.env.TOTAL_SHARDS
    });
    SHARD_COUNT++;
});

manager.spawn();
