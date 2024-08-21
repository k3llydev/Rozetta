import 'dotenv/config';
import * as gulp from 'gulp';
import { join as joinPath, sep as pathSep, posix as pathPosixSep } from 'path';
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import * as conventionalRecommendedBump from 'conventional-recommended-bump';
import { execSync } from 'child_process';
import * as ejs from 'ejs';

import type AppPackage from './package.json';
import type TypescriptConfig from './tsconfig.json';

const TSCONFIG = require('./tsconfig.json') as typeof TypescriptConfig;
const PACKAGE = require('./package.json') as typeof AppPackage;

/**
 * Generates a release for the application
 */
gulp.task('release', gulp.series(
    bumpVersion,
    generateChangelog
));

/**
 * Handles the required steps after the build. Current steps:
 * 
 * - Simplify and add application's package.json to the build output
 * 
 */
gulp.task('postbuild', gulp.series(
    generatePackageToBundle,
    // copyPrismaClient
));

gulp.task('prepareDocker', gulp.series(
    generateNginxConfigFromTemplate
));

async function generateNginxConfigFromTemplate() {
    if(!process.env.TOTAL_SHARDS)
        throw new Error('TOTAL_SHARDS environment variable is not set');
    const template = readFileSync(joinPath(__dirname, '/.docker/nginx/nginx.conf.ejs'), 'utf8');
    const rendered = ejs.render(template, {
        port: 'localhost',
        totalShards: process.env.TOTAL_SHARDS
    });
    writeFileSync(joinPath(__dirname, '/.docker/nginx/nginx.conf'), rendered);
    return Promise.resolve(true);
}

async function generatePackageToBundle() {
    const builtPackage = {
        name: PACKAGE.name,
        version: PACKAGE.version,
        description: PACKAGE.description,
        author: PACKAGE.author,
        license: PACKAGE.license,
        dependencies: PACKAGE.dependencies,
        scripts: {
            postinstall: 'npx prisma generate --schema=./database/schema.prisma',
            start: PACKAGE.scripts['run:prod']
        }
    };
    const buildPath = joinPath(__dirname, TSCONFIG.compilerOptions.outDir);
    writeFileSync(
        joinPath(buildPath, 'package.json'),
        JSON.stringify(builtPackage, null, 4)
    );
    return Promise.resolve(true);
}

async function copyPrismaClient() {
    const buildPath = joinPath(__dirname, TSCONFIG.compilerOptions.outDir);
    const prismaClientDestPath = joinPath(buildPath, '/node_modules/.prisma/');
    mkdirSync(prismaClientDestPath, { recursive: true });
    copyFileSync(prismaClientDestPath, joinPath(__dirname, '/node_modules/.prisma/'));
}

async function bumpVersion() {

    const { releaseType } = await conventionalRecommendedBump({
        preset: 'conventionalcommits'
    }).catch(err => {
        throw new Error('Failed to generate releaseType\n' + err);
    });

    execSync(`npm version ${releaseType} --no-git-tag-version`);
}

function generateChangelog() {
    execSync(`npx conventional-changelog --preset conventionalcommits --infile CHANGELOG.md --same-file`);
}

function toUnixPath(path: string) {
    return path.split(pathSep).join(pathPosixSep.sep);
}