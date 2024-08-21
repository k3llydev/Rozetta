import { Module } from '@nestjs/common';
import { DiscordPingCommand } from './ping.command';

@Module({
    providers: [ DiscordPingCommand ]
})
export class PingCommandModule {}