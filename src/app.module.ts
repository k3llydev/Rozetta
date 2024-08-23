import { Module } from '@nestjs/common';
import { NecordModule } from 'necord';

// Configuration
import { ConfigModule, ConfigService } from '@nestjs/config';
import Configuration from './config';

// HTTP/S API
import { ApiModule } from './api/api.module';

// Discord bot
import { BotModule } from './bot/bot.module';

// Cache layer
import { CacheModule } from './cache/cache.module';

// Database
import { DatabaseModule } from './database/database.module';

// Internationalization
import { IntlModule } from './i18n/intl.module';

// Cron jobs
import { JobsModule } from './jobs/jobs.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: Configuration
    }),
    NecordModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        token: config.get<string>('discord.token'),
        intents: [
          'Guilds',
          'GuildMembers',
          'GuildVoiceStates',
          'GuildPresences',
          'GuildMessages',
          'GuildMessageReactions',
          'DirectMessages',
          'DirectMessageReactions'
        ]
      }),
      inject: [ConfigService]
    }),
    IntlModule,
    DatabaseModule,
    CacheModule,
    JobsModule,
    BotModule,
    ApiModule
  ]
})
export class AppModule {}
