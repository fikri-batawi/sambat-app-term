const {saveSambat, listSambats} = require('./sambat');
const yargs = require('yargs');

const main = async () => {
    yargs.command({
        command : 'add',
        describe : 'Menambahkan sambat',
        builder : {
            name : {
                describe : 'Nama Panggilan',
                type : 'string',
                demandOption : true,
            },
            sambat : {
                describe : 'Sambatan apa',
                type : 'string',
                demandOption : true,
            }
        },
        handler: (argv) => saveSambat(argv.name, argv.sambat)
    })
    yargs.command({
        command: 'list',
        describe : 'Menampilkan sambat',
        builder: {},
        handler : () => listSambats()
    })

    yargs.parse();
}

main();