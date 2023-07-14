const fs = require('fs')
const data = fs.readFileSync('characters.json')
const jsonString = data.toString('utf8');
const oggetto = JSON.parse(jsonString);
console.log(oggetto[3]);