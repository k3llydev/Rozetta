import { Global, Module } from '@nestjs/common';

import { DatabaseConnectionService } from './services/connection.database.service';

import { DatabaseUsersService } from './services/users.database.service';
import { DatabaseMultiversesService } from './services/multiverses.database.service';
import { DatabaseMultiversesConfigService } from './services/multiversesconfig.database.service';
import { DatabaseSessionsService } from './services/sessions.database.service';

const services = [
    DatabaseUsersService,
    DatabaseMultiversesService,
    DatabaseMultiversesConfigService,
    DatabaseSessionsService
];

@Global()
@Module({
    providers: [
        DatabaseConnectionService,
        ...services
    ],
    exports: services
})
export class DatabaseModule {}
