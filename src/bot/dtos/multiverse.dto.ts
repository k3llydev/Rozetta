import type { User } from 'discord.js';
import { StringOption, UserOption } from 'necord';

export class CreateMultiverseCommandOptions {
    @StringOption({
        name: 'name',
        description: 'Multiverse name',
        required: true
    })
    name: string;
}

export class InviteMultiverseCommandOptions {
    @StringOption({
        name: 'username',
        description: 'Username of the person you want to invite',
        required: true
    })
    username: string;
}

export class MemberMultiverseCommandOptions {

    @StringOption({
        name: 'action',
        description: 'The type of action that would be executed',
        required: true,
        choices: [
            {
                name: 'Promote',
                value: 'promote'
            },
            {
                name: 'Demote',
                value: 'demote'
            },
            {
                name: 'Kick',
                value: 'kick'
            },
            {
                name: 'Mute',
                value: 'mute'
            }
        ]
    })
    action: string;

    @UserOption({
        name: 'user',
        description: 'The user who would receive the action',
        required: true
    })
    user: User;

}

export class ConfigMultiverseCommandOptions {

    @StringOption({
        name: 'option',
        description: 'Option to be changed',
        required: true,
        autocomplete: true
    })
    option: string;

    @StringOption({
        name: 'value',
        description: 'New value to be set',
        required: true,
        autocomplete: true
    })
    value: string;

}