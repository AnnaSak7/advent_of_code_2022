import { crates, rearrangement } from "./data";

function rearrangementIntoArray(str: string): number[][] {
  const strToArray = str.split("\n");
  let resultArray: number[][] = [];
  strToArray.map((set: string) => {
    let oneSet: string[] = set.split(",");
    let oneSetNum: number[] = oneSet.map((item: string) => +item);
    resultArray.push(oneSetNum);
  });
  console.log("array", resultArray);
  return resultArray;
}

const arrangements = rearrangementIntoArray(rearrangement);

function rearrangeCrates(crates: string[][], arrangements: number[][]) {
  for (let i = 0; i < arrangements.length; i++) {
    let fromCrate: string[] = crates[arrangements[i][1] - 1];
    let toCrate: string[] = crates[arrangements[i][2] - 1];
    for (let k = 0; k < arrangements[i][0]; k++) {
      let crate: any = fromCrate.pop();
      toCrate.push(crate);
    }
  }
  console.log("crates ", crates);
  return crates;
}

rearrangeCrates(crates, arrangements);
