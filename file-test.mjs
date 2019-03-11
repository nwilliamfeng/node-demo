import fs from 'fs'

let content = fs.readFileSync('./package.json').toString();

console.log(content);