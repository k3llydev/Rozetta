import { Injectable } from '@nestjs/common';
import { IntlService } from '@/i18n/intl.service';
import { ActionRowBuilder, ModalActionRowComponentBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, StringSelectMenuBuilder } from 'discord.js';

@Injectable()
export class CreateMultiverseComponent {

    constructor(
        private readonly intl: IntlService
    ) {}

    get modal() {
        return new ModalBuilder()
            .setCustomId('multiverse/confirmCreate')
            .setTitle('Create a multiverse')
            .setComponents([
                new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents([
                    this.input('name', this.intl.t('components.create-multiverse-name-input')),
                    // this.select('language', this.intl.t('components.create-multiverse-language-select'), [
                    //     {
                    //         label: 'English',
                    //         value: 'en'
                    //     },
                    //     {
                    //         label: 'Español',
                    //         value: 'es'
                    //     }
                    // ])
                ])
            ]);
    }

    private input(name: string, label: string) {
        return new TextInputBuilder()
            .setCustomId(name)
            .setLabel(label)
            .setStyle(TextInputStyle.Short);
    }

    private select(name: string, label: string, options: { label: string, value: string }[]) {
        return new StringSelectMenuBuilder()
            .setCustomId(name)
            .setPlaceholder(label)
            .setOptions(options);
    }

}