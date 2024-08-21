import { IntlService } from '@/i18n/intl.service';
import { Injectable } from '@nestjs/common';
import { StringSelectMenuBuilder } from 'discord.js';

@Injectable()
export class SelectMultiverseBoxComponent {

    private readonly minValues = 1;
    private readonly maxValues = 1;

    constructor(
        private readonly intl: IntlService
    ) {}

    public selectBox(id: string, options: Parameters<StringSelectMenuBuilder['setOptions']> = []) {
        return new StringSelectMenuBuilder()
            .setCustomId(id)
            .setPlaceholder(this.intl.t('components.select-multiverse-box-component-placeholder'))
            .setMinValues(this.minValues)
            .setMaxValues(this.maxValues)
            .setOptions(...options)
    }

}
