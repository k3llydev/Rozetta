import { Injectable } from '@nestjs/common';
import * as Generators from '@/database/generators';
import { DatabaseConnectionService } from '@/database/services/connection.database.service';

type CreateProps = {
    name: string;
    ownerId: string;
}

@Injectable()
export class DatabaseplanetsService {

    constructor(
        private readonly database: DatabaseConnectionService
    ) {}

    private get planets() {
        return this.database.planets;
    }

    create({ name, ownerId }: CreateProps) {
        return this.planets.create({
            data: {
                id: Generators.planetId(name),
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
        return this.planets.findFirst({
            where: {
                name
            }
        });
    }

    getByOwnerId(ownerId: string) {
        return this.planets.findMany({
            where: {
                ownerId
            }
        });
    }

}
