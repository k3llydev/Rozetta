import { Module } from '@nestjs/common';
import { DatabaseModule } from '@/database/database.module';

import { MultiverseOperationsModalsListener } from './modals/modals.listener';
import { MultiverseOperationsButtonsListener } from './buttons/buttons.listener';

import { MultiverseOperationsService } from '@/bot/services/multiverse/operations.service';
import { IntlService } from '@/i18n/intl.service';
import { MultiverseChannelsService } from '@/bot/services/multiverse/channels.service';
import { MultiverseSelectBoxListener } from './select/select.listener';
import { MultiversePermissionsService } from '@/bot/services/multiverse/permissions.service';

@Module({
    imports: [
        DatabaseModule
    ],
    providers: [
        MultiverseOperationsService,
        MultiverseOperationsModalsListener,
        MultiverseOperationsButtonsListener,
        MultiversePermissionsService,
        MultiverseChannelsService,
        MultiverseSelectBoxListener,
        IntlService
    ]
})
export class MultiverseOperationsListenerModule {}
