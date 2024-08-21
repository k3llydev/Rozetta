import { Injectable } from '@nestjs/common';
import { Modal, ModalContext, Ctx } from 'necord';

import { MultiverseOperationsService } from '@/bot/services/multiverse/operations.service';

@Injectable()
export class MultiverseOperationsModalsListener {

    constructor(
        private readonly multiverse: MultiverseOperationsService
    ) {}

    @Modal('multiverse/confirmCreate')
    onCreateMultiverse(
        @Ctx() [ interaction ]: ModalContext
    ) {
        return this.multiverse.create([ interaction ], interaction.fields.getTextInputValue('name'));
    }

}