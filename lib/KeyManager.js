
const Configstore = require('configstore');
const pkg = require('../package.json');

class KeyManager {
    constructor() {
        this.conf = new Configstore(pkg.name);
    }

    setKey(key) {
        this.conf.set('apiKey', key);
        return key;
    }

    getKey() {
        this.conf.get('apiKey');
        if(!key) {
            throw new Error('No API Key found -- Get a key at https://api.nomics.com');
        }
        return key;
    }

    deleteKey() {
        this.conf.get('apiKey');
        if(!key) {
            throw new Error('No API Key found -- Get a key at https://api.nomics.com');
        }
        this.conf.delete('apiKey');
        return;
    }
}

module.exports = KeyManager;