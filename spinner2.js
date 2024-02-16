const characters = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
const timeouts = [100, 300, 500, 700, 900, 1100, 1300, 1500];

//Iterate through the characters array 
for (let i = 0; i < characters.length; i++) {
  setTimeout(() => {
    //Every iteratation, print a different character into the same line
    process.stdout.write(`\r${characters[i]}   `);
  }, timeouts[i]); //Every iteration adds 1 to i which will change its index position (higher timeout)
}

