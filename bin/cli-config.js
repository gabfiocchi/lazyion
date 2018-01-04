#!/usr/bin/env node
'use strict';

const colors = require('colors');
const program = require('commander');

program
    .option('-e, --enviroment <type>', 'Set enviroment', 'develop')
    // .option('-f, --force', 'force installation')
    .parse(process.argv);

// if (program.force) console.log('  force: install');

// read enviroment
if (program.enviroment) {
    // llama a las configs para setear el ambiente, pasar a un archivo externo...
    console.error(colors.red('Enviroment add.'));
} else {
    console.error(colors.red('Enviroment required.'));
}
