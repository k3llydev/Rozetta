import { DatabaseSessionsService } from '@/database/services/sessions.database.service';
import { DatabaseUsersService } from '@/database/services/users.database.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { OAuth2Credentials } from 'src/typeorm/entities/OAuth2Credentials.entity';
// import { User } from 'src/typeorm/entities/User.entity';
// import {
//     FindOAuth2Params,
//     FindUserParams,
//     OAuth2Details,
//     UserDetails,
// } from 'src/utils/types';
import { Repository } from 'typeorm';
// import { IAuthService } from './interfaces/auth';

@Injectable()
export class AuthService {
    constructor(
        private readonly users: DatabaseUsersService,
        private readonly sessions: DatabaseSessionsService
        // @InjectRepository(User) private readonly userRepository: Repository<User>,
        // @InjectRepository(OAuth2Credentials) private readonly oauth2Repository: Repository<OAuth2Credentials>,
    ) { }

    async validateUser(discordId: string) {
        return this.users.getByDiscordId(discordId);
    }

    // createUser(details: UserDetails) {
    //     return this.users
    //     const user = this.userRepository.create(details);
    //     return this.userRepository.save(user);
    // }

    // async updateUser(details: UserDetails) {
    //     await this.userRepository.update(details.discordId, details);
    //     return details;
    // }

    // findUser(params: FindUserParams) {

    //     return this.userRepository.findOne(params);
    // }

    async validateOAuth2({ accessToken, discordId }: any) {
        return this.sessions.findByUserDiscordId(discordId, accessToken);
    }

    createOAuth2(details: any) {
        const user = this.sessions.create(details);
        return user;
    }

    // async updateOAuth2(details: OAuth2Details) {
    //     await this.oauth2Repository.update(details.discordId, details);
    //     return details;
    // }

    // findOAuth2(params: FindOAuth2Params) {
    //     return this.oauth2Repository.findOne(params);
    // }
}