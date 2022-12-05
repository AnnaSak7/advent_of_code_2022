import { crates, rearrangement } from "./data";

function rearrangementIntoArray(str: string): number[][] {
  const strToArray = str.split("\n");
  let resultArray: number[][] = [];
  strToArray.map((set: string) => {
    let oneSet: string[] = set.split(",");
    let oneSetNum: number[] = oneSet.map((item: string) => +item);
    resultArray.push(oneSetNum);
  });
  return resultArray;
}

const arrangements = rearrangementIntoArray(rearrangement);

function topOfEachStack(stack: string[][]): string {
  const containers: string[] = [];
  stack.map((stack: string[]) => {
    let one: any = stack.pop();
    containers.push(one);
  });

  return containers.join("");
}

function rearrangeCrates(crates: string[][], arrangements: number[][]): string {
  for (let i = 0; i < arrangements.length; i++) {
    let fromCrate: string[] = crates[arrangements[i][1] - 1];
    let toCrate: string[] = crates[arrangements[i][2] - 1];
    for (let k = 0; k < arrangements[i][0]; k++) {
      let crate: any = fromCrate.pop();
      toCrate.push(crate);
    }
  }
  console.log("crates ", topOfEachStack(crates));
  return topOfEachStack(crates);
}

rearrangeCrates(crates, arrangements);

// =================part 2====================
function rearrangeCrates2(
  crates: string[][],
  arrangements: number[][]
): string {
  for (let i = 0; i < arrangements.length; i++) {
    let numberOfCrates: number = arrangements[i][0];
    let fromCrate: string[] = crates[arrangements[i][1] - 1];
    let toCrate: string[] = crates[arrangements[i][2] - 1];

    let containers: string[] = fromCrate.slice(numberOfCrates * -1);
    fromCrate.splice(fromCrate.length - numberOfCrates, numberOfCrates);
    containers.map((letter: string) => toCrate.push(letter));
  }
  console.log("crates2 ", topOfEachStack(crates));
  return topOfEachStack(crates);
}

rearrangeCrates2(crates, arrangements);
