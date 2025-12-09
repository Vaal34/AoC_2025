const { log } = require("console");
const fs = require("fs");

const data = fs.readFileSync("input.txt", "utf8").trim();

const sections = data.split("\n\n");

const ListplageID = sections[0].split("\n");
const ids = sections[1].split("\n");

let freshId = 0;

for (const id of ids) {
  const numId = Number(id);
  for (const plageID of ListplageID) {
    const [firstId, lastId] = plageID.split("-").map(Number);
    if (numId >= firstId && numId <= lastId) {
      freshId += 1;
      break;
    }
  }
}

log(freshId);
