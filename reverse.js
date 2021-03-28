
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('enter text ', (answer) => {
 let reply=answer.split("").reverse().join("");
  console.log(`mirror text: ${reply}`);

  rl.close();
});