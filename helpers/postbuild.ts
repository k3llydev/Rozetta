import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const FileContents = readFileSync(join(__dirname, '../package.json'), { encoding: 'utf-8' });
const Package = JSON.parse(FileContents);

const SimplifiedPackage = {
    name: Package.name,
    author: Package.author,
    version: Package.version,
    main: 'index.js',
    license: Package.license,
    scripts: {
        start: 'node .'
    },
    dependencies: Package.dependencies
};

writeFileSync(join(__dirname, '../build/package.json'), JSON.stringify(SimplifiedPackage, null, 2));
