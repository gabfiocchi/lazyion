#!/usr/bin/env node
'use strict';

const colors = require('colors');
const cordova = require('../lib/cordova');
const fs = require('fs');
const commander = require('commander');


commander
    .option('-e, --enviroment <type>', 'Set enviroment', 'develop')
    .parse(process.argv);

try {
    const ionConfigs = fs.readFileSync('ionic.config.json');
    console.error(colors.green('Ionic configuration found it.'));
}
catch (err) {
    console.error(colors.red('Ionic configuration file not found.'));
    // si no existe el config, terminamos la ejecución.
    process.exit(1);
}
//     // read enviroment
if (commander.enviroment) {
    // llama a las configs para setear el ambiente, pasar a un archivo externo...
    cordova.config(commander.enviroment);
} else {
    console.error(colors.red('Enviroment required.'));
}
