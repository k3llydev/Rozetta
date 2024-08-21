import { Module } from '@nestjs/common';

import { MultiverseController } from './multiverse.controller';

// Import services
import { MultiverseService } from '@/api/services/multiverse.service';
import { DatabaseModule } from '@/database/database.module';

@Module({
  controllers: [
    MultiverseController
  ],
  imports: [
    DatabaseModule
  ],
  providers: [
    MultiverseService
  ]
})
export class MultiverseControllerModule {}
