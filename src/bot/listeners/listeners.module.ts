import { Module } from '@nestjs/common';

import { MultiverseListenerModule } from './multiverse/multiverse.listener.module';
import { BotLogsListenerModule } from './bot-logs/bot-logs.listener.module';
import { MultiverseVoiceListenerModule } from './multiverse/voice/voice.listener.module';

@Module({
    imports: [
        BotLogsListenerModule,
        MultiverseListenerModule,
        MultiverseVoiceListenerModule
    ]
})
export class ListenersModule {}
