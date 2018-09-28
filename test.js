const karma = require('karma');
const karmaServer = new karma.Server({ singleRun: false, configFile: __dirname + '/karma.conf.js' });
karmaServer.start();
// How to stop the server, and be informed when cleanup is finished?
// karma.stop(() => console.log('server exited gracefully'));
