import { Module } from '@nestjs/common';

import { DatabaseModule } from '@/database/database.module';
import { DiscordSetupCommand } from './setup.command';
import { SetupService } from '@/bot/services/setup/setup.service';


@Module({
    imports: [
        DatabaseModule
    ],
    providers: [
        DiscordSetupCommand,
        SetupService
    ]
})
export class SetupCommandModule {}