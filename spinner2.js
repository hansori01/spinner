let timeIncrements = 100;
const animationChar = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '/'];

for (let char of animationChar) {
  setTimeout(() => {process.stdout.write(`\r${char}   `);}, timeIncrements);
  timeIncrements += 200;
}