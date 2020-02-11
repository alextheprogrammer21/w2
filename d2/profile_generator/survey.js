const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Whats your name? Nicknames are also acceptable ', (answer) => {

  rl.question('Whats an activity you like doing?', (answer2) => {

    rl.question('What do you listen to while doing that?', (answer3) => {

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer4) => {

        rl.question('Whats your favourite thing to eat for that meal?', (answer5) => {

          rl.question('Which sport is your absolute favourite? ', (answer6) => {

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {

              console.log(`name: ${answer}, activity: ${answer2}, listen to: ${answer3}, meal: ${answer4}, eat after meal: ${answer5}, sports: ${answer6}, superpower: ${answer7}`);
              rl.close();
            })
          })
        })
      })
    })
  })
})