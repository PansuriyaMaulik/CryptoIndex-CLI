#!/usr/bin/env node

const program = require('commander')
const pkg = require('../package.json')

program.version(pkg.version)
    .command('key', 'Manage Api Key --- https://api.nomics.com')
    .command('check', 'Check Coin Price Info')
    .parse(process.argv);