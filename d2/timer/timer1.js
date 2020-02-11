let myArgs = process.argv.slice(2);

myArgs.sort(function(a, b) {
  return a - b;
});

console.log(myArgs);


let newarr = [];

for (let i = 0; i < myArgs.length; i++) {
  newarr.push(parseInt (myArgs[i]))
}

for (let i = 0; i < newarr.length; i++) {

  if(typeof newarr[i] === "number" && newarr[i] > 0) {
    setTimeout(() => {
    process.stdout.write('\x07');
  }, newarr[i]*1000);
}
}





