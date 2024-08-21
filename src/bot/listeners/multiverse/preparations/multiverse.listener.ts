import { CreateMultiverseComponent } from '@/bot/components/CreateMultiverse/CreateMultiverse.component';
import { MultiversePreparationsService } from '@/bot/services/multiverse/preparations.service';

import { Injectable } from '@nestjs/common';
import { Button, ButtonContext, Ctx, SelectedStrings, StringSelect, StringSelectContext } from 'necord';

@Injectable()
export class MultiversePreparationsListener {

    constructor(
        private readonly createMultiverseComponent: CreateMultiverseComponent,
        private readonly multiversePreparations: MultiversePreparationsService
    ) {}

    @Button('click/createMultiverse')
    public createMultiverse(@Ctx() [ interaction ]: ButtonContext) {
        return interaction.showModal(this.createMultiverseComponent.modal);
    }

    @Button('click/inviteToMultiverse')
    public inviteToMultiverse(@Ctx() [ interaction ]: ButtonContext) {
        return this.multiversePreparations.forInviting([interaction]);
    }

    @Button('click/hostPartyStart')
    public prepareHostParty(@Ctx() [ interaction ]: ButtonContext) {
        return this.multiversePreparations.forHostingParty([interaction]);
    }

    // @Button('click/')
    // public 

}