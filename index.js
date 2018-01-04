#!/usr/bin/env node
'use strict';


const colors = require('colors');
const commander = require('commander');
const packageJson = require('./package.json');



commander
    .version(packageJson.version)
    .description(packageJson.description);

console.log(colors.green('Hello!'))