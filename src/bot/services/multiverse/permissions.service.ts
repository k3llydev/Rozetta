import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

interface MultiverseUserRole {
    id: number;
    label: string;
    permissions: {
        allow: bigint;
        deny: bigint;
    }
}

@Injectable()
export class MultiversePermissionsService {

    constructor(
        private readonly config: ConfigService
    ) {}

    private get roles() {
        return this.config.get<MultiverseUserRole[]>('multiverse.roles');
    }

    public getRolePermissions(roleId: number) {
        const role = this.roles.find(role => role.id === roleId);
        if(!role) return null;
        return role.permissions;
    }

}