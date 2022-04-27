const fs = require("fs");
const file = fs.readFileSync("test.txt", "utf-8");

console.log(file);
