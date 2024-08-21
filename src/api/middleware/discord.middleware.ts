import { Request, Response, NextFunction } from 'express';

export const appendDiscordShardManager = (shardManager: any) => (req: Request, res: Response, next: NextFunction) => {
    // req.shardManager = shardManager;
    next();
};
