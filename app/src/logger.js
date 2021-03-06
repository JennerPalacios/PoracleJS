let winston = require('winston');
let config = require('config');

module.exports =

    new (winston.Logger)({
        transports: [
            new (winston.transports.Console)({level:config.general.logLevel}),
            new (winston.transports.File)({filename: 'logs/worker.log',
                level: 'debug'})
        ]
    });
