const { log } = require("console");
const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf8").trim().split("\n");

let password = 0;
let actualValue = 50;
let number;
let direction;

for (let i = 0; i < input.length; i++) {
  direction = input[i][0];
  number = Number(input[i].split(direction)[1]);
  if (number >= 100) {
    number = number % 100;
  }

  if (direction === "L") {
    if (actualValue - number < 0) {
      actualValue = actualValue - number + 100;
    } else {
      actualValue = actualValue - number;
    }
  } else if (direction === "R") {
    if (actualValue + number > 99) {
      actualValue = actualValue + number - 100;
    } else {
      actualValue = actualValue + number;
    }
  }
  if (actualValue == 0) {
    password += 1;
  }
}

log("Password is :", password);
