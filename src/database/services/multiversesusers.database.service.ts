import { Injectable } from '@nestjs/common';
import { DatabaseConnectionService } from '@/database/services/connection.database.service';

type CreateProps = {
    multiverseId: string;
    userId: string;
    roleId: string;
}

@Injectable()
export class DatabaseMultiversesUsersService {

    constructor(
        private readonly database: DatabaseConnectionService
    ) {}

    private get model() {
        return this.database.multiversesUsers;
    }

    create({ multiverseId, userId, roleId }: CreateProps) {
        return null;
        // return this.model.create({
        //     data: {
        //         multiverseId,
        //         userId,
        //         roleId
        //     }
        // });
    }

}
