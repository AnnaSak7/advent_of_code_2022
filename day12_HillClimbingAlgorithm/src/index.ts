import { data } from "./data";

const arrayData: string[][] = data.split("\n").map((str) => str.split(""));
const SPosition = arrayData.map((set) => {
  //   set.indexOf();
});

console.log("S ", SPosition);
console.log("data ", arrayData);
