import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { MultiverseControllerModule } from './controllers/multiverse.controller.module';
import { UsersControllerModule } from './controllers/users/users.controller.module';
import { AuthControllerModule } from './auth/auth.module';

@Module({
  imports: [
    PassportModule.register({ session: true }),
    AuthControllerModule,
    MultiverseControllerModule,
    UsersControllerModule
  ]
})
export class ApiModule {}
