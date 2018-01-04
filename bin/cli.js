#!/usr/bin/env node
'use strict';


const colors = require('colors');
const commander = require('commander');
const packageJson = require('../package.json');


commander
    .version(packageJson.version)
    .description(packageJson.description)
    .command('config', 'configuration one or more settings').alias('c');

commander.parse(process.argv);