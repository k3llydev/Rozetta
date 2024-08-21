import { registerAs } from '@nestjs/config';

export default registerAs('redis', () => ({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    user: process.env.REDIS_USER,
    pass: process.env.REDIS_PASS
}));
