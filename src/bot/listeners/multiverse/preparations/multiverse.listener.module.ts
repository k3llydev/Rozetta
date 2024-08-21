import { Module } from '@nestjs/common';

import { DatabaseModule } from '@/database/database.module';
import { MultiversePreparationsListener } from './multiverse.listener';

import { MultiversePreparationsService } from '@/bot/services/multiverse/preparations.service';
import { IntlService } from '@/i18n/intl.service';
import { CreateMultiverseComponent } from '@/bot/components/CreateMultiverse/CreateMultiverse.component';
import { MultiverseMessagesService } from '@/bot/services/multiverse/messages.service';
import { SelectMultiverseBoxComponent } from '@/bot/components/SelectMultiverseBox/SelectMultiverseBox.component';
import { MultiverseChannelsService } from '@/bot/services/multiverse/channels.service';

@Module({
    imports: [
        DatabaseModule
    ],
    providers: [
        MultiversePreparationsListener,
        MultiversePreparationsService,
        MultiverseMessagesService,
        SelectMultiverseBoxComponent,
        CreateMultiverseComponent,
        IntlService
    ]
})
export class MultiversePreparationsListenerModule {}
