const { existsSync, mkdirSync, writeFileSync, readFileSync } = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

// Membuat folder data jika belum ada
const dirPath = './data';
if (!existsSync(dirPath)){
    mkdirSync(dirPath);
};

// Membuat file jika belum ada
const filePath = './data/sambat.json';
if(!existsSync(filePath)) {
    writeFileSync(filePath, '[]', 'utf-8');
};

const askQuestion = (question) => {
    return new Promise((resolve, rejects) => {
        rl.question(question, (answer) => {
            resolve(answer)
        })
    })
}

const saveSambat = (name, sambat) => {
    const dataSambat = {name, sambat}

    // Tambah data inputan
    const data = JSON.parse(readFileSync(filePath, {encoding:"utf-8"}));
    data.push(dataSambat)

    // Save ke file sambat
    writeFileSync(filePath, JSON.stringify(data), 'utf-8');
    rl.close();
}

module.exports = {askQuestion, saveSambat}