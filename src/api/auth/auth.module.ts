import { Module } from '@nestjs/common';
import { AuthController } from '../controllers/auth/auth.controller';
import { DiscordStrategy } from './discord.strategy';
import { AuthService } from './auth.service';
import { DatabaseModule } from '@/database/database.module';

@Module({
    controllers: [
        AuthController
    ],
    imports: [
        DatabaseModule
    ],
    providers: [
        AuthService,
        DiscordStrategy
    ]
})
export class AuthControllerModule { }
