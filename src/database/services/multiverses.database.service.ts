import { Injectable } from '@nestjs/common';
import * as Generators from '@/database/generators';
import { DatabaseConnectionService } from '@/database/services/connection.database.service';

type CreateProps = {
    name: string;
    ownerId: string;
}

@Injectable()
export class DatabaseMultiversesService {

    constructor(
        private readonly database: DatabaseConnectionService
    ) {}

    private get multiverses() {
        return this.database.multiverses;
    }

    create({ name, ownerId }: CreateProps) {
        return this.multiverses.create({
            data: {
                id: Generators.multiverseId(name),
                name,
                points: 0,
                xp: 0,
                ownerUser: {
                    connect: {
                        id: ownerId
                    }
                },
                users: {
                    create: {
                        id: Generators.userId(ownerId),
                        roleId: '0',
                        userId: ownerId
                    }
                }
            }
        });
    }

    isNameUsed(name: string) {
        return this.multiverses.findFirst({
            where: {
                name
            }
        });
    }

    getByOwnerId(ownerId: string) {
        return this.multiverses.findMany({
            where: {
                ownerId
            }
        });
    }

}
