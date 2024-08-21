import { Body, Controller, Post, Response } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { POSTCreateUserDTO } from '@/api/dtos/Users.dto';
import { UsersService } from '@/api/services/users.service';

@Controller('users')
export class UsersController {

    constructor(
        private readonly usersService: UsersService
    ) {}

    @ApiResponse({ status: 201, description: 'User created.' })
    @ApiResponse({ status: 400, description: 'Bad request.' })
    @ApiResponse({ status: 500, description: 'Something went wrong.' })
    @Post('register')
    registerUser(
        @Body() body: POSTCreateUserDTO
    ) {
        return this.usersService.register(body);
    }

}
