const request = require('request');
const fs = require('fs');

const input = process.argv.slice(2);
let URL = input[0];

let saveFilePath = input[1] + "mynewfile.txt";

request(URL, (error, response, body) => {

console.error(`INVALID URL`);

  fs.readFile((body), (err, data) => {
    fs.appendFile('mynewfile1.txt', body, (err) => {
      if (err) { console.log("error LOL") }
      fs.rename('./mynewfile1.txt', saveFilePath, (errr) => {
        let stats = fs.statSync(saveFilePath);
        let fileSizeInBytes = stats["size"];
        console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${saveFilePath}`);
      })
    })
  });
  
})