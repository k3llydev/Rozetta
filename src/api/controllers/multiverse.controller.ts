import { Body, Controller, Post, Response } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { MultiverseService } from '@/api/services/multiverse.service';
import { POSTSendNotificationDTO } from '@/api/dtos/sendNotification';

@Controller('multiverse')
export class MultiverseController {

    constructor(
        private readonly multiverseService: MultiverseService
    ) {}

    @ApiResponse({ status: 201, description: 'Notification was sent' })
    @ApiResponse({ status: 400, description: 'Provided multiverseId was either not found or invalid.' })
    @ApiResponse({ status: 500, description: 'Something went wrong.' })
    @Post('notifications/send')
    sendNotification(
        @Body() body: POSTSendNotificationDTO
    ) {
        return this.multiverseService.sendNotification(body);
    }

}