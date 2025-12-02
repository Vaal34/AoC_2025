const { log } = require("console");
const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf8").trim().split(",");

let invalids = 0;

for (const range of input) {
  let [min, max] = range.split("-").map(Number);
  while (min <= max) {
    const valueStr = min.toString();
    if (valueStr.length % 2 == 0) {
      const middle = valueStr.length / 2;
      const firstPart = valueStr.slice(0, middle);
      const secondPart = valueStr.slice(middle);

      if (valueStr[0] === "0") {
        invalids += min;
      } else if (firstPart === secondPart) {
        invalids += min;
      }
    }
    min++;
  }
}

log(invalids);
