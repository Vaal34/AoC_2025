import { log } from "console";
import { readFileSync } from "fs";

const input = readFileSync("input.txt", "utf8").trim().split("\n");

let banks;

let firstNumber;
let secondNumber = 0;

let voltage;
let biggestVoltage = 0;

let voltageTotal = 0;

for (let i = 0; i < input.length; i++) {
  banks = input[i];
  for (let y = 0; y < banks.length - 1; y++) {
    firstNumber = banks[y];
    secondNumber = 0;
    for (let z = y + 1; z < banks.length; z++) {
      if (Number(banks[z]) > secondNumber) {
        secondNumber = Number(banks[z]);
      }
    }
    voltage = firstNumber + secondNumber.toString();
    if (Number(voltage) > biggestVoltage) {
      biggestVoltage = voltage;
    }
}
  voltageTotal = voltageTotal + Number(biggestVoltage);
  biggestVoltage = 0;
}

log("Le résultat total du nombre de volatage est:", voltageTotal);
