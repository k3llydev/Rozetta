import { Module } from '@nestjs/common';
import { DiscordRegisterCommand } from './register.command';
import { DatabaseModule } from '@/database/database.module';
import { UsersRegisterService } from '@/bot/services/users/register.service';

@Module({
    imports: [ DatabaseModule ],
    providers: [
        DiscordRegisterCommand,
        UsersRegisterService
    ]
})
export class RegisterCommandModule {}
