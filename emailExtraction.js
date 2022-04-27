const fs = require("fs");
const file = fs.readFileSync("test.txt", "utf-8");

const linesInFile = file.toLowerCase().split("\r\n");
const wordsInFile = [];
linesInFile.forEach((line) => {
  const words = line.split(" ");
  words.forEach((word) => wordsInFile.push(word));
});
const softwireEmailAddresses = wordsInFile.filter(
  (word) => word.includes("@softwire.com") && !word.endsWith(".comet.net")
);

console.log(
  `Number of softwire email addresses: ${softwireEmailAddresses.length}`
);
