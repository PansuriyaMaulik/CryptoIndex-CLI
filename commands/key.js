const inquirer = require('inquirer');
const Colors = require('colors');
const KeyManager = require('../lib/KeyManager.js');
const { isRequired } = require('../utils/validation.js');

const key = {
    async set() {
        //create instance of KeyManager
        const keyManager =  new KeyManager();

        //Take the Api key from user
        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Enter APi Key '.green + 'https://www.coinapi.io',
                validate: isRequired
            }
        ]);

        //Set the API Key
        const key = keyManager.setKey(input.key);

        if(key) {
            console.log('API key set successfully'.blue);
        }
    },

    show() {
        try {
        //create instance of KeyManager
        const keyManager =  new KeyManager();
        const key = keyManager.getKey();

        console.log('Current Api key is: ', key.yellow);
        return key;
        } catch (e) {
            console.error(e.message.red);
        }
    },

    remove() {
       try {
        //create instance of KeyManager
        const keyManager =  new KeyManager();
        keyManager.deleteKey();

        console.log('Key is removed'.blue);
        return;
        } catch (e) {
            console.error(e.message.red);
        }
    }
}

module.exports = key;