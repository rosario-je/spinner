const characters = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
const timeouts = [100, 300, 500, 700, 900, 1100, 1300, 1500];

for (let i = 0; i < characters.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${characters[i]}   `);
  }, timeouts[i]);
}

