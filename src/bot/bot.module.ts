import { Module } from '@nestjs/common';

// Import commands
import { PingCommandModule } from './commands/ping/ping.command.module';
import { SetupCommandModule } from './commands/setup/setup.command.module';
import { RegisterCommandModule } from './commands/register/register.command.module';

// Import generic modules
import { ListenersModule } from './listeners/listeners.module';


@Module({
  imports: [
    ListenersModule,
    PingCommandModule,
    SetupCommandModule,
    RegisterCommandModule
  ],
  providers: []
})
export class BotModule {}
