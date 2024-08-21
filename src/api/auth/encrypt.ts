import { createHash } from 'crypto';

import crypto from 'crypto';
const ALGORITHM = 'aes-256-ctr'
const SECRET_KEY = process.env.SECRET_PASSPHRASE;
export function encrypt(token: string) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(ALGORITHM, SECRET_KEY, iv);
    const encrypted = Buffer.concat([cipher.update(token), cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
}

export function decrypt(token: string) {
    const [iv, encryptedText] = token.split(':');
    const decipher = crypto.createDecipheriv(ALGORITHM, SECRET_KEY, Buffer.from(iv, 'hex'));
    const decrypted = Buffer.concat([decipher.update(Buffer.from(encryptedText, 'hex')), decipher.final()]);
    return decrypted.toString();
}
