import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Context, ContextOf, Once, On } from 'necord';

@Injectable()
export class BotLogsListener {

    constructor(
        private readonly config: ConfigService,
        private readonly log: Logger
    ) {}

    @Once('ready')
    botLoggedIn(
        @Context() [client]: ContextOf<'ready'>
    ) {
        this.log.log(`Bot logged in as "${client.user.id}"`, 'TheRealMultiverse');
        this.log.log(`API exposed in port ${this.config.get<string>('app.port')}`, 'TheRealMultiverse');
    }

    @On('warn')
    onWarn(
        @Context() [message]: ContextOf<'warn'>
    ) {
        this.log.warn(message, 'TheRealMultiverse');
    }

}