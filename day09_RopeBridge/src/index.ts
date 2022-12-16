import { data, data2 } from "./data";

const dataArray: string[][] = data.split("\n").map((item) => item.split(" "));
const dataArray2: string[][] = data2.split("\n").map((item) => item.split(" "));

function headCommands(
  set: string[],
  headPosition: number[],
  currentTailPosition: number[]
): number[][] {
  let resultArray: number[][] = [];
  //["R", 2]
  if (set[0] === "R") {
    headPosition[0] += 1;
  } else if (set[0] === "L") {
    headPosition[0] -= 1;
  } else if (set[0] === "U") {
    headPosition[1] += 1;
  } else if (set[0] === "D") {
    headPosition[1] -= 1;
  }
  currentTailPosition = tailMovement(headPosition, currentTailPosition);
  resultArray.push(headPosition);
  resultArray.push(currentTailPosition);
  return resultArray;
}

function isTouching(
  headPosition: number[],
  currentTailPosition: number[]
): boolean {
  return (
    Math.abs(headPosition[0] - currentTailPosition[0]) < 2 &&
    Math.abs(headPosition[1] - currentTailPosition[1]) < 2
  );
}

function tailMovement(
  headPosition: number[],
  currentTailPosition: number[]
): number[] {
  let tailNewPosition: number[] = currentTailPosition;
  if (!isTouching(headPosition, currentTailPosition)) {
    let xBigger = headPosition[0] > currentTailPosition[0];
    let xSmaller = headPosition[0] < currentTailPosition[0];
    let yBigger = headPosition[1] > currentTailPosition[1];
    let ySmaller = headPosition[1] < currentTailPosition[1];

    if (xBigger) {
      tailNewPosition[0] = currentTailPosition[0] + 1;
    }
    if (xSmaller) {
      tailNewPosition[0] = currentTailPosition[0] - 1;
    }
    if (yBigger) {
      tailNewPosition[1] = currentTailPosition[1] + 1;
    }
    if (ySmaller) {
      tailNewPosition[1] = currentTailPosition[1] - 1;
    }
  }

  return tailNewPosition;
}

// console.log("tails current position ", tailMovement([3, 5], [2, 3]));

//If tail is same position or same -1 === is touching
//If tailPosition[0][1] === headPosition[0][1] <> than 2 === not touching
//If false (not touching) tailPosition[0] or [1] or both move to headPosition[0] or [1] -1 (move to previous headPosition

//If both x and y position change in H both need to change in T as well.

//If head x is > or < and bigger than two numbers away tail need to === head s

const followCommands = (data: string[][]) => {
  let head = [0, 0];
  let tail = [0, 0];
  let resultArray: number[][] = [[0, 0]];
  for (let set of data) {
    for (let i = 0; i < +set[1]; i++) {
      let trackingArray = headCommands(set, head, tail);
      head.splice(0, 2, trackingArray[0][0], trackingArray[0][1]);
      tail.splice(0, 2, trackingArray[1][0], trackingArray[1][1]);
      resultArray.push(trackingArray[1]);
    }
  }
  return resultArray;
};

interface Obj {
  [key: number]: number[];
}

const commandsForTenKnots = (data: string[][]) => {
  let obj: Obj = {
    0: [0, 0],
    1: [0, 0],
    2: [0, 0],
    3: [0, 0],
    4: [0, 0],
    5: [0, 0],
    6: [0, 0],
    7: [0, 0],
    8: [0, 0],
    9: [0, 0],
  };
  let resultArray = new Set();
  data.map((set) => {
    for (let i = 0; i < +set[1]; i++) {
      for (let k = 0; k <= 8; k++) {
        if (k === 0) {
          let trackingArray = headCommands(set, obj[k], obj[k + 1]);
          obj[k] = trackingArray[0];
          obj[k + 1] = trackingArray[1];
        } else {
          let newTail = tailMovement(obj[k], obj[k + 1]);
          obj[k + 1] = newTail;
        }
        resultArray.add(obj[9]);
      }
    }
  });
  console.log("rrrrr", resultArray);
  return resultArray;
};

const result = commandsForTenKnots(dataArray);
console.log("result ", result);
console.log("result # ", result.size);

// const result = followCommands(dataArray);
// const join = result.map((position) => position.join("join"));
// const unique = join.filter((value, index) => {
//   return join.indexOf(value) === index;
// });
// console.log("unique", unique);
// console.log("unique length", unique.length);

//Rope Bridge
//Get the commands for the head movement ==O
//Define how the head gets to the position ==X
//Define when the tail is touching the head ==O
//Define how the tail is following the head ==O
//Track the positions the tail has been in following the head. ==X
//Filter the list of positions the tail has been in to get unique positions  ==X
//Return number of positions tail has been in ==X
