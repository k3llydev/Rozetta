import 'dotenv/config';
import { ShardingManager } from 'discord.js';

const {
    DISCORD_BOT_TOKEN,
    SHARDING_TOTAL_SHARDS,
    SHARDING_INITIAL_PORT,
    SHARDING_PORT_INCREMENT
} = process.env;

if(!SHARDING_TOTAL_SHARDS || !SHARDING_INITIAL_PORT || !SHARDING_PORT_INCREMENT)
    throw new Error('One or more SHARDING environment variable is not present');

if(
    typeof SHARDING_TOTAL_SHARDS !== 'number' || 
    typeof SHARDING_INITIAL_PORT !== 'number' || 
    typeof SHARDING_PORT_INCREMENT !== 'number'
)
    throw new Error('One or more SHARDING environment variable is not a number');

const manager = new ShardingManager(`${__dirname}/main.js`, {
    mode: 'process',
    token: DISCORD_BOT_TOKEN,
    totalShards: SHARDING_TOTAL_SHARDS
});

let SHARD_COUNT = 0;
manager.on('shardCreate', shard => {
    console.log(`[SHARD] Discord started a shard with id "${shard.id}"`);
    console.log('[SHARD] Application API exposed on port', SHARDING_INITIAL_PORT + SHARD_COUNT);
    Object.assign(shard.env, {
        API_PORT: SHARDING_INITIAL_PORT + SHARD_COUNT,
        SHARD_NUMBER: SHARD_COUNT + 1,
        SHARD_TOTAL: SHARDING_TOTAL_SHARDS
    });
    SHARD_COUNT += SHARDING_PORT_INCREMENT;
});

manager.spawn();
