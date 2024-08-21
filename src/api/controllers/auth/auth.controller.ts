import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthenticatedGuard, DiscordAuthGuard } from '@/api/auth/Guards';

@Controller('auth')
export class AuthController {

    @Get('discord/redirect')
    @UseGuards(DiscordAuthGuard)
    redirect() {
        return { msg: 'Redirect' };
    }

    @Get('login')
    @UseGuards(DiscordAuthGuard)
    login() {
        return { msg: 'Login' };
    }

    @Get('status')
    @UseGuards(AuthenticatedGuard)
    status(@Req() req: Request) {
        return req.user;
    }

    @Post('logout')
    logout() {
        return {};
    }

}