const fs = require('fs');
const path = require("path");
const notesDataPath = path.join(__dirname, "../data/db.json");

const readData = () => {
    const data = fs.readFileSync(notesDataPath);
    return JSON.parse(data);
}

// const writeData = (dbPath, data) => {
//     fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
// }
// veriyi db de kaydetmek istersek bunu kullaniriz

module.exports = {
    readData
    //writeData
}
