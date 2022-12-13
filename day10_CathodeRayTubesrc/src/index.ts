import { signal } from "./data";

const dataOrganization = (str: string): number[][] => {
  const resultArray: number[][] = [[0, 1]];
  const strArray = str.split("\n");
  let count = 0;
  strArray.map((signal) => {
    if (signal === "noop") {
      count += 1;
      resultArray.push([count, 0]);
    } else {
      let addX = signal.split(" ");
      count += 1;
      resultArray.push([count, 0]);
      count += 1;
      resultArray.push([count, +addX[1]]);
    }
  });
  return resultArray;
};

const data = dataOrganization(signal);

const cycles = [20, 60, 100, 140, 180, 220];
const signalStrength = (data: number[][], cycles: number[]) => {
  let resultArray: number[] = [];

  cycles.forEach((cycle) => {
    let slicedData = data.slice(0, cycle);
    let sum = 0;
    for (let item of slicedData) {
      sum += item[1];
    }
    resultArray.push(sum * cycle);
  });
  console.log("reA", resultArray);
  const total = resultArray.reduce((a, b) => a + b);
  console.log("total", total);
  return total;
};

signalStrength(data, cycles);

const createScreen = () => {
  const array = [];
  while (array.length < 6) {
    let newArr = new Array(39);
    array.push(newArr);
  }
  return array;
};
console.log("create ", createScreen());

const spritePosition = () => {
  // const CRT = createScreen()
};
