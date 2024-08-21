import { Module, Logger } from '@nestjs/common';

import { BotLogsListener } from './bot-logs.listener';

@Module({
    providers: [
        Logger,
        BotLogsListener
    ]
})
export class BotLogsListenerModule {}
