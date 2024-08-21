import { Global, Module } from '@nestjs/common';
// import { NecordLocalizationModule, DefaultLocalizationAdapter, UserResolver } from '@necord/localization';
import { I18nModule } from 'nestjs-i18n';
import { join as joinPath } from 'path';

import { IntlService } from './intl.service';

@Global()
@Module({
    imports: [
        I18nModule.forRoot({
            fallbackLanguage: 'en',
            loaderOptions: {
                path: joinPath(__dirname, '.'),
                debug: false,
                nonExplicitWhitelist: true
            }
        }),
        // NecordLocalizationModule.forRoot({
        //     resolvers: UserResolver,
        //     // Also you can provide class for support injection by @Inject
        //     adapter: new DefaultLocalizationAdapter({
        //         fallbackLocale: 'en-US',
        //         locales: {
        //             'en-US': {
        //                 'commands.ping.name': 'ping',
        //                 'commands.ping.description': 'Pong!'
        //             },
        //             ru: {
        //                 'commands.ping.name': 'пинг',
        //                 'commands.ping.description': 'Понг!'
        //             }
        //         }
        //     })
        // })
    ],
    providers: [ IntlService ]
})
export class IntlModule {}
