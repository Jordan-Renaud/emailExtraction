const fs = require("fs");
const file = fs.readFileSync("test.txt", "utf-8");

// Exercise 1
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
  `Number of softwire email addresses found without Regex: ${softwireEmailAddresses.length}`
);

//Exercise 2
const regexForSoftwireOnly = /@softwire\.com\s/g;
const foundMatches = file.match(regexForSoftwireOnly);
console.log(
  `Number of softwire email addresses found Regex: ${foundMatches.length}`
);

//Exercise 3
const regexForAllEmails = /\b@(\S+)\b/g;
const emailDomains = file.match(regexForAllEmails);

console.log(
  `Number of total email addresses found Regex: ${emailDomains.length}`
);

const emailCountsUnsorted = {};
emailDomains.forEach((domainName) => {
  if (emailCountsUnsorted.hasOwnProperty(domainName)) {
    emailCountsUnsorted[domainName]++;
  } else {
    emailCountsUnsorted[domainName] = 1;
  }
});

// for (const [key, value] of Object.entries(emailCountsUnsorted)) {
//   console.log(`${key}: ${value}`);
// }
