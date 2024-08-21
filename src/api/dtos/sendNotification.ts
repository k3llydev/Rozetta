import { ApiProperty } from '@nestjs/swagger';

export class POSTSendNotificationDTO {

    @ApiProperty({
        description: 'Multiverse ID where the notification must be sent.',
        type: String
    })
    multiverseId: string;

    @ApiProperty({
        description: 'The message that should be sent to the multiverse.',
        type: String
    })
    message: string;

}