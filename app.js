const {askQuestion, saveSambat} = require('./sambat');
const yargs = require('yargs');

const main = async () => {
    const name = await askQuestion('Kenalan dulu namanya siapa? ');
    const sambat = await askQuestion(`Hai ${name}, mau sambat apa hari ini? `);

    saveSambat({name, sambat})
}

main();