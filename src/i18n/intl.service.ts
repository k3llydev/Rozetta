import { Global, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { I18nService } from 'nestjs-i18n';

import constants from '@/config/constants';
// import { MultiverseConfigManagerService } from '@/database/managers/multiverseConfig.manager';

@Global()
@Injectable()
export class IntlService {

    private language = 'en';

    constructor(
        private readonly config: ConfigService,
        private readonly i18n: I18nService,
        // private readonly multiverseConfig: MultiverseConfigManagerService
    ) {}

    t(locale: string, args?: any, lang: string = constants.defaultLanguage): string {
        const result = this.i18n.t(locale, {
            args,
            lang
        }) as string;
        if(result === locale)
            this.addNewEmptyKey(locale);
        return result;
    }

    get availableLanguages() {
        return this.i18n.getSupportedLanguages();
    }

    async loadLocalizedMultiverse(multiverseId: string) {
        return this.t; // TODO: Remove once database managers have been refactored
        // const { value: lang } = await this.multiverseConfig.getConfig(multiverseId, 'language');
        // if(!lang) return this.t;
        // return (locale: string, args?: any): string => this.i18n.t(locale, {
        //     args,
        //     lang
        // });
    }

    private addNewEmptyKey(locale: string) {

    }

}