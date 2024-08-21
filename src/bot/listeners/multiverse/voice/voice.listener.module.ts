import { Module } from '@nestjs/common';

import { DatabaseModule } from '@/database/database.module';

import { IntlService } from '@/i18n/intl.service';
import { MultiverseVoiceListener } from './voice.listener';
import { MultiverseMessagesService } from '@/bot/services/multiverse/messages.service';
import { SelectMultiverseBoxComponent } from '@/bot/components/SelectMultiverseBox/SelectMultiverseBox.component';
import { MultiversePreparationsService } from '@/bot/services/multiverse/preparations.service';

@Module({
    imports: [
        DatabaseModule
    ],
    providers: [
        IntlService,
        MultiverseVoiceListener,
        MultiverseMessagesService,
        MultiversePreparationsService,
        SelectMultiverseBoxComponent
    ]
})
export class MultiverseVoiceListenerModule {}
