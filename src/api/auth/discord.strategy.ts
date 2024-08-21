import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-discord';
import { encrypt } from './encrypt';
import { AuthService } from './auth.service';

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly authService: AuthService
    ) {
        super({
            clientID: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            callbackURL: process.env.DISCORD_REDIRECT_URI,
            scope: ['identify', 'email'],
        });
    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: Profile,
        done: any,
    ) {
        const encryptedAccessToken = encrypt(accessToken).toString();
        // const encryptedRefreshToken = encrypt(refreshToken).toString();
        const { id: discordId, email, discriminator, username, avatar } = profile;
        const user = await this.authService.validateUser(discordId);
        await this.authService.validateOAuth2({
            discordId,
            accessToken: encryptedAccessToken,
            // refreshToken: encryptedRefreshToken,
        });
        done(null, user);
    }
}
