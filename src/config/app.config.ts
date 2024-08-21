import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
    host: process.env.APP_HOST,
    port: process.env.API_PORT,
    shardNumber: process.env.SHARD_NUMBER,
    shardTotal: process.env.SHARD_TOTAL
}));
