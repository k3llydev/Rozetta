import { Module, Global } from '@nestjs/common';
import { RedisService } from './redis.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';
import { CacheModule as CacheManager } from '@nestjs/cache-manager';

@Global()
@Module({
    imports: [
        CacheManager.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                isGlobal: true,
                store: redisStore,
                host: config.get<string>('redis.host'),
                port: config.get<number>('redis.port'),
                username: config.get<string>('redis.user'),
                password: config.get<string>('redis.pass'),
                no_ready_check: true
            })
        })
    ],
    providers: [
        RedisService
    ],
    exports: [
        RedisService
    ]
})
export class CacheModule {}
