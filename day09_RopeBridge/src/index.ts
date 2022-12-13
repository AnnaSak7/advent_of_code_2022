import { after } from "node:test";
import { data } from "./data";

const dataArray: string[][] = data.split("\n").map((item) => item.split(" "));
console.log("dataArray", dataArray);

function headCommands(set: string[], headPosition: number[]): number[] {
  //["R", 2]
  if (set[0] === "R") {
    headPosition[0] += +set[1];
  } else if (set[0] === "L") {
    headPosition[0] -= +set[1];
  } else if (set[0] === "U") {
    headPosition[1] += +set[1];
  } else if (set[0] === "D") {
    headPosition[1] -= +set[1];
  }
  return headPosition;
}

function tailCommands(
  headPosition: number[],
  currentTailPosition: number[]
): number[] {
  let isTouching =
    headPosition[0] - currentTailPosition[0] < 2 &&
    headPosition[1] - currentTailPosition[1] < 2 &&
    currentTailPosition[0] - headPosition[0] < 2 &&
    currentTailPosition[1] - headPosition[1] < 2;

  console.log("isTouching ", isTouching);

  //================================================================================================

  //   let isTouchingVertical =
  //     headPosition[0] === currentTailPosition[0] &&
  //     headPosition[1] - currentTailPosition[1] < 2 &&
  //     currentTailPosition[1] - headPosition[1] < 2;

  //   let isTouchingHorizontal =
  //     headPosition[1] === currentTailPosition[1] &&
  //     headPosition[0] - currentTailPosition[0] < 2 &&
  //     currentTailPosition[0] - headPosition[0] < 2;

  //   let isTouchingDiagonally =
  //     (currentTailPosition[0] === headPosition[0] - 1 &&
  //       currentTailPosition[1] === headPosition[1] - 1) ||
  //     (currentTailPosition[0] === headPosition[0] - 1 &&
  //       currentTailPosition[1] === headPosition[1] + 1) ||
  //     (currentTailPosition[0] === headPosition[0] + 1 &&
  //       currentTailPosition[1] === headPosition[1] + 1) ||
  //     (currentTailPosition[0] === headPosition[0] + 1 &&
  //       currentTailPosition[1] === headPosition[1] - 1);

  //   console.log("vertical", isTouchingVertical);
  //   console.log("horizontal", isTouchingHorizontal);
  //   console.log("diagonal", isTouchingDiagonally);

  let isVerticalAligned = headPosition[0] === currentTailPosition[0];
  let isHorizontalAligned = headPosition[1] === currentTailPosition[1];

  let isHeadSmaller =
    headPosition[0] < currentTailPosition[0] ||
    headPosition[1] < currentTailPosition[1];
  console.log("isHeadSmaller ", isHeadSmaller);

  let tailNewPosition: number[] = [];
  if (!isHeadSmaller) {
    if (!isTouching && isVerticalAligned) {
      tailNewPosition[0] = currentTailPosition[0];
      tailNewPosition[1] = headPosition[1] - 1;
    }
    if (!isTouching && isHorizontalAligned) {
      tailNewPosition[1] = currentTailPosition[1];
      tailNewPosition[0] = headPosition[0] - 1;
    }
  } else {
    if (!isTouching && isVerticalAligned) {
      tailNewPosition[0] = currentTailPosition[0];
      tailNewPosition[1] = headPosition[1] + 1;
    }
    if (!isTouching && isHorizontalAligned) {
      tailNewPosition[1] = currentTailPosition[1];
      tailNewPosition[0] = headPosition[0] + 1;
    }
  }

  if (!isTouching && !isVerticalAligned && !isHorizontalAligned) {
    // [2, 1]    [0, 0]  => [1, 1]
    if (
      headPosition[0] > currentTailPosition[0] &&
      headPosition[1] > currentTailPosition[1]
    ) {
      tailNewPosition[0] = currentTailPosition[0] + 1;
      tailNewPosition[1] = currentTailPosition[1] + 1;
    }
    if (
      headPosition[0] > currentTailPosition[0] &&
      headPosition[1] < currentTailPosition[1]
    ) {
      tailNewPosition[0] = currentTailPosition[0] + 1;
      tailNewPosition[1] = currentTailPosition[1] - 1;
    }
    if (
      headPosition[0] < currentTailPosition[0] &&
      headPosition[1] < currentTailPosition[1]
    ) {
      tailNewPosition[0] = currentTailPosition[0] - 1;
      tailNewPosition[1] = currentTailPosition[1] - 1;
    }
    if (
      headPosition[0] < currentTailPosition[0] &&
      headPosition[1] > currentTailPosition[1]
    ) {
      tailNewPosition[0] = currentTailPosition[0] - 1;
      tailNewPosition[1] = currentTailPosition[1] + 1;
    }
    // [3, 5]    [2, 3] =>  [3, 4]
  }
  return tailNewPosition;

  //==============================================================================
  //["R", 2]

  //   if (currentTailPosition[0] === headPosition[0] && !isTouching) {
  //     currentTailPosition[1] = headPosition[1] - 1;
  //   }
  //   if (currentTailPosition[1] === headPosition[1] && !isTouching) {
  //     currentTailPosition[0] = headPosition[0] - 1;
  //   }
  //   if (currentTailPosition[0] > headPosition[0] && !isTouching) {
  //     currentTailPosition[1] = headPosition[1] - 1;
  //   }
  //   if (currentTailPosition[1] > headPosition[1] && !isTouching) {
  //     currentTailPosition[0] = headPosition[0] - 1;
  //   }

  //   return currentTailPosition;
}

console.log("tails current position ", tailCommands([3, 5], [2, 3]));

//If tail is same position or same -1 === is touching
//If tailPosition[0][1] === headPosition[0][1] <> than 2 === not touching
//If false (not touching) tailPosition[0] or [1] or both move to headPosition[0] or [1] -1 (move to previous headPosition

//If both x and y position change in H both need to change in T as well.

//If head x is > or < and bigger than two numbers away tail need to === head s

// console.log("command ", headCommands(["U", "5"], [0, -2]));

//[0, 0]  t: [0, 0] |
//[-1, 0] t: [0, 0] | L 1
//[0, 0] t:[0, 0]  | R 1
//[0, 1] t: [0, 0]  | U 1
//[1, 1] t:[0,0 ] | R 1
//[0, 1] t:[0,0] |  L 1
//[0, 3] t:[0, 2]| U 2

//R & L === X
//U & D === Y
//Starting position 0.0 or shape 0.0
//Make a hypothetical chess board where every new position T ends up in is a new shape
//Store all T shapes in an array
//Filter the array to only unique numbers
//Add numbers together

const followCommands = (data: string[][]) => {
  let afterCommandHeadPosition = [0, 0];
  let previousHeadPosition = [0, 0];
  let tailPosition = [0, 0];
  let resultArray: number[][] = [];
  for (let set of data) {
    afterCommandHeadPosition = headCommands(set, previousHeadPosition);

    if (previousHeadPosition[0] === afterCommandHeadPosition[0]) {
      for (
        let k = 1;
        k <= afterCommandHeadPosition[1] - previousHeadPosition[1];
        k++
      ) {
        tailPosition = tailCommands(
          [previousHeadPosition[0], previousHeadPosition[1] + k],
          tailPosition
        );
        resultArray.push(tailPosition);
      }
    }
    console.log("resultArray ", resultArray);
  }
};

followCommands(dataArray);

function trackingHead() {
  //const headArray =  previousHeadPosition [0, 0] ==> [0, 3]
}

//Take the data loop it and track future position of the head
//compare current head position and futureHeadPosition
//fill in tiles between current and future
