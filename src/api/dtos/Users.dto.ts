import { ApiProperty } from '@nestjs/swagger';

export class POSTCreateUserDTO {

    @ApiProperty({
        description: 'Discord ID of the user.',
        type: String
    })
    discordId: string;

    @ApiProperty({
        description: 'Discord access token used to verify the user.',
        type: String
    })
    discordToken: string;

}