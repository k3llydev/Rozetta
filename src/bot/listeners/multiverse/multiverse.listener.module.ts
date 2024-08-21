import { Module } from '@nestjs/common';

import { MultiverseOperationsListenerModule } from './operations/multiverse.listener.module';
import { MultiversePreparationsListenerModule } from './preparations/multiverse.listener.module';
import { MultiverseVoiceListenerModule } from './voice/voice.listener.module';

@Module({
    imports: [
        MultiversePreparationsListenerModule,
        MultiverseOperationsListenerModule,
        MultiverseVoiceListenerModule
    ]
})
export class MultiverseListenerModule {}
