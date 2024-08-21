import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cache } from 'cache-manager';

@Injectable()
export class RedisService {

    private readonly defaultTtl = this.config.get<number>('cache.defaultTtl');

    constructor(
        private readonly config: ConfigService,
        @Inject(CACHE_MANAGER) private readonly cache: Cache
    ) {}

    save<T>(key: string, value: T, ttl?: number): Promise<void> {
        return this.cache.set(key, value, ttl || this.defaultTtl);
    }

    async saveMany<T>(key: string, value: T, ttl?: number): Promise<void> {
        const prevValues = await this.get<T[]>(key) || [];
        return this.cache.set(key, [ ...prevValues, value ], ttl || this.defaultTtl);
    }

    get<T>(key: string): Promise<T> {
        return this.cache.get(key);
    }

    async getOr<T>(key: string, callback: () => Promise<T>) {
        const result = await this.get<T>(key);
        return result || callback();
    }

    async getOrSave<T>(key: string, callback: () => Promise<T>, ttl?: number) {
        const result = await this.get<T>(key);
        if(result)
            return result;
        const cbResult = await callback();
        if(!cbResult) return;
        await this.save(key, cbResult, ttl);
        return cbResult;
    }

    async getOrSaveMany<T>(key: string, callback: () => Promise<T>, ttl?: number) {
        const result = await this.get<T>(key);
        if(result)
            return result;
        const cbResult = await callback();
        if(!cbResult) return;
        await this.saveMany(key, cbResult, ttl);
        return cbResult;
    }

    async search(key: string) {
        const keys = await this.cache.store.keys(key);
        return this.cache.store.mget(...keys);
    }

}