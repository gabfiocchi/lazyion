#!/usr/bin/env node
'use strict';

const commander = require('commander');
const packageJson = require('./package.json');


commander.command('fullname').alias('f')
    .description('Print Full Name')
    .action(() => console.log('hola'));

commander.command('contact').alias('c')
    .description('Print Contact Info')
    .action(() => console.log('holaaa'));

commander.parse(process.argv);