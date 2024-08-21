import { createHash } from 'crypto';

export const hashValue = (value: string) => {
    return createHash('md5').update(value).digest('hex');
}
