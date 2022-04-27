const fs = require("fs");
const file = fs.readFileSync("test.txt", "utf-8");

const wordsInFile = file.toLowerCase().split(" ");
const softwireEmailAddresses = wordsInFile.filter(
  (word) => word.includes("@softwire.com") && !word.endsWith(".comet.net")
);

console.log(
  `Number of softwire email addresses: ${softwireEmailAddresses.length}`
);
