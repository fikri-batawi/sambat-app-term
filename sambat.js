const { existsSync, mkdirSync, writeFileSync, readFileSync } = require('fs');

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

const loadSambats = () => {
    const data = JSON.parse(readFileSync(filePath, {encoding:"utf-8"}));
    return data;
}

const saveSambat = (name, sambat) => {
    const dataSambat = {name, sambat}

    // Tambah data inputan
    const data = loadSambats();
    data.push(dataSambat)

    // Save ke file sambat
    writeFileSync(filePath, JSON.stringify(data), 'utf-8');
}

const listSambats = () => {
    const sambats = loadSambats();
    sambats.forEach((sambat, index) => {
        console.log(`${index + 1}. ${sambat.name}`)
        console.log(`-- ${sambat.sambat}`)
    });
}

module.exports = {saveSambat, listSambats}