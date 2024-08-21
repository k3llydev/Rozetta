import { Injectable } from '@nestjs/common';

import { IntlService } from '@/i18n/intl.service';
import { ActionRowBuilder, SelectMenuBuilder } from 'discord.js';
import { SelectMultiverseBoxComponent } from '@/bot/components/SelectMultiverseBox/SelectMultiverseBox.component';
// import { MultiversesEntity } from '@/database/entities/Multiverses.entity';

@Injectable()
export class MultiverseMessagesService {

    constructor(
        private readonly intl: IntlService,
        private readonly selectMultiverseComponent: SelectMultiverseBoxComponent
    ) {}

    getOwnedMultiverseSelectionBox(id: string, userMultiverses: any[]) { // TODO: Fix type
        return {
            content: this.intl.t('messages.voice-state-update-create-party-select-multiverse'),
            components: [
                new ActionRowBuilder<SelectMenuBuilder>()
                    .addComponents(
                        this.selectMultiverseComponent.selectBox(id, userMultiverses.map(multiverse => ({
                            label: multiverse.name,
                            value: multiverse.id
                        })))
                    )
            ]
        }
    }

}