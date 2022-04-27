const fs = require("fs");
const file = fs.readFileSync("test.txt", "utf-8");

const wordsInFile = file.split(" ");
const softwireEmailAddresses = wordsInFile.filter(
  (word) => word.substring(word.length - 13) === "@softwire.com"
);

console.log(
  `Number of softwire email addresses: ${softwireEmailAddresses.length}`
);
