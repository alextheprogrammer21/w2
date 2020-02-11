let sentence = "hello there from lighthouse labs";
// console.log(arr);




// let typewrite = (sentence, index) => {
  
//    setTimeout(() => {
//      process.stdout.write(sentence[index]);
//    }, 1000);
 
//    if(index === sentence.length -1) {
//      return setTimeout(() => {
//       process.stdout.write(sentence[index]);
//     }, 1000);
//    } 
//      typewrite(sentence, index+1)
//   }


// typewrite(sentence, 0);

sentence += "\n";

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, 100 + (i*100));
} 
//go through all the chars and have a process.write after each char 
