import { registerAs } from '@nestjs/config';

export default registerAs('cache', () => ({
    defaultTtl: 60,
    http: {

    },
    database: {

    },
    ttl: { // Move into database
        multiverses: {
            getById: 6000,
            getByOwnerId: 6000,
            isNameUsed: 6000
        }
    }
}));
