import { Injectable, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { Ctx, SelectedStrings, StringSelect, StringSelectContext } from 'necord';

import { MultiverseOperationsService } from '@/bot/services/multiverse/operations.service';

@Injectable()
export class MultiverseSelectBoxListener {

    constructor(
        private readonly multiverseOperations: MultiverseOperationsService
    ) {}

    // @UseInterceptors(CacheInterceptor)
    @StringSelect('select/multiverseHostParty')
    public onSelectMultiverse(
        @Ctx() [ interaction ]: StringSelectContext,
        @SelectedStrings() selected: string[]
    ) { return this.multiverseOperations.startHostParty([ interaction ], selected[0]); }

}