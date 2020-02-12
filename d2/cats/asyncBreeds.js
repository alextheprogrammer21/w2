const fs = require('fs');

const breedDetailsFromFile = function(breed, cb = (teheh) => {
  return teheh;
}) {
  // console.log('breedDetailsFromFile: Calling readFile...'); 
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error,data) => {
    // console.log("In readFile's callback: it has the data. ");

    if (!error) cb(data);
    if (error) cb(undefined);
  });
};

// const bombay = breedDetailsFromFile('Bombay'); 


module.exports = breedDetailsFromFile;