#!/usr/bin/env node

const program = require('commander')
const pkg = require('../package.json')

program.version(pkg.version)
    .command('key', 'Manage Api Key --- https://www.coinapi.io/')
    .parse(process.argv);