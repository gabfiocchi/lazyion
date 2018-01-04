'use strict';

const colors = require('colors');
const fs = require('fs');

const exec = require('child_process').exec;
const xml2js = require('xml2js');
const parseString = xml2js.parseString;


const configs = JSON.parse(fs.readFileSync('ionic.config.json'));
const packageApp = JSON.parse(fs.readFileSync('package.json'));

// usar de archivo base el ionic.config.json
// steps para script setear enviroment cordova/ionic
// 1 - actualizar config.xml
// chequeando si tiene facebook, twitter id, etc..
// 2 - actualizar archivo app.constants.ts
// 3 - actualizar iconos
// 4 - borrar plataformas, plugins, y volver a instalarlos con el config por defecto.

exports.config = (env) => {
    console.log('Initializing enviroment:', colors.green(env));
    fs.readFile('config.xml', 'utf-8', (err, data) => {
        if (err) throw err;
        parseString(data, (err, result) => {
            if (err) console.log(err);
            // here we log the results of our xml string conversion
            let json = result;
            
            let app_name = configs.automate[env].app_name;
            let app_id = configs.automate[env].app_id;
            let facebook = configs.automate[env].facebook;
            let twitter = configs.automate[env].twitter;
            
            // check env configs
            if (app_name) json.widget.name = app_name;
            if (app_id) json.widget['$'].id = app_id;

            if (facebook) {
                let cordovaPluginName = 'cordova-plugin-facebook4';
                let plugin = json.widget.plugin.filter((item) => item['$'].name === cordovaPluginName);

                plugin[0].variable.map(itemPlugin => {
                    let key = itemPlugin['$'].name.toLowerCase();
                    itemPlugin['$'].value = configs.automate[env].facebook[key];
                });
            };

            if (twitter) {
                let cordovaPluginName = 'twitter-connect-plugin';
                let plugin = json.widget.plugin.filter((item) => item['$'].name === cordovaPluginName);
                plugin[0].variable.map(itemPlugin => {
                    let key = itemPlugin['$'].name.toLowerCase();
                    itemPlugin['$'].value = configs.automate[env].twitter[key];
                })
            };


            let builder = new xml2js.Builder();
            let xml = builder.buildObject(json);

            fs.writeFile('config.xml', xml, function (err, data) {
                if (err) console.log(err);
                console.log(colors.yellow('Done!'), colors.green('Successfully update config.xml'));
            });

        });
    });
}

exports.update = () => {
    console.log(packageApp.cordova.platforms);
    // leemos la cantidad de paquetes

    // var cmd = 'ionic cordova platform ls';
    // exec(cmd, (error, stdout, stderr) => {
    //   // command output is in stdout
    //   if (error !== null) {
    //     console.error(error);
    //   }
    //   console.log(stdout);
    //   // console.log(stderr);
    // });
}

exports.set = () => {
    console.log('test', 4 * 2);
    console.log('package', packageApp.cordova.platforms);
}
