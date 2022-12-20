const program = require('commander');
const key = require('../commands/key.js');

program
    .command('set')
    .description('Set Api Key --- Get at https://www.coinapi.io/')
    .action(key.set);

program
    .command('show')
    .description('Show Api Key')
    .action(key.show);

program
    .command('remove')
    .description('Remove Api Key')
    .action(key.remove);

program.parse(process.argv);