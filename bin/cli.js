#!/usr/bin/env node
'use strict';


const colors = require('colors');
const commander = require('commander');
const packageJson = require('../package.json');


commander.command('fullname').alias('f')
    .description('Print Full Name')
    .action(() => console.log(colors.red('Ionssddic configuration file it does not exist.')))
commander.command('config', 'configuration one or more settings').alias('c');

commander.command('sontact').alias('s')
    .description('Print Contact Info')
    .action(() => console.log('holaaa'));

commander.parse(process.argv);