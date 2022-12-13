"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
const dataArray = data_1.data.split("\n").map((item) => item.split(" "));
const dataArray2 = data_1.data2.split("\n").map((item) => item.split(" "));
function headCommands(set, headPosition, currentTailPosition) {
    let resultArray = [];
    //["R", 2]
    if (set[0] === "R") {
        headPosition[0] += 1;
        currentTailPosition = tailMovement(headPosition, currentTailPosition);
    }
    else if (set[0] === "L") {
        headPosition[0] -= 1;
        currentTailPosition = tailMovement(headPosition, currentTailPosition);
    }
    else if (set[0] === "U") {
        headPosition[1] += 1;
        currentTailPosition = tailMovement(headPosition, currentTailPosition);
    }
    else if (set[0] === "D") {
        headPosition[1] -= 1;
        currentTailPosition = tailMovement(headPosition, currentTailPosition);
    }
    resultArray.push(headPosition);
    resultArray.push(currentTailPosition);
    return resultArray;
}
function isTouching(headPosition, currentTailPosition) {
    return (headPosition[0] - currentTailPosition[0] < 2 &&
        headPosition[1] - currentTailPosition[1] < 2 &&
        currentTailPosition[0] - headPosition[0] < 2 &&
        currentTailPosition[1] - headPosition[1] < 2);
}
function tailMovement(headPosition, currentTailPosition) {
    let isVerticalAligned = headPosition[0] === currentTailPosition[0];
    let isHorizontalAligned = headPosition[1] === currentTailPosition[1];
    let isHeadSmaller = headPosition[0] < currentTailPosition[0] ||
        headPosition[1] < currentTailPosition[1];
    let tailNewPosition = [];
    if (!isHeadSmaller) {
        if (!isTouching(headPosition, currentTailPosition) && isVerticalAligned) {
            tailNewPosition[0] = currentTailPosition[0];
            tailNewPosition[1] = currentTailPosition[1] + 1;
        }
        if (!isTouching(headPosition, currentTailPosition) && isHorizontalAligned) {
            tailNewPosition[1] = currentTailPosition[1];
            tailNewPosition[0] = currentTailPosition[0] + 1;
        }
    }
    else {
        if (!isTouching(headPosition, currentTailPosition) && isVerticalAligned) {
            tailNewPosition[0] = currentTailPosition[0];
            tailNewPosition[1] = currentTailPosition[1] - 1;
        }
        if (!isTouching(headPosition, currentTailPosition) && isHorizontalAligned) {
            tailNewPosition[1] = currentTailPosition[1];
            tailNewPosition[0] = currentTailPosition[0] - 1;
        }
    }
    if (!isTouching(headPosition, currentTailPosition) &&
        !isVerticalAligned &&
        !isHorizontalAligned) {
        // [2, 1]    [0, 0]  => [1, 1]
        if (headPosition[0] > currentTailPosition[0] &&
            headPosition[1] > currentTailPosition[1]) {
            tailNewPosition[0] = currentTailPosition[0] + 1;
            tailNewPosition[1] = currentTailPosition[1] + 1;
        }
        if (headPosition[0] > currentTailPosition[0] &&
            headPosition[1] < currentTailPosition[1]) {
            tailNewPosition[0] = currentTailPosition[0] + 1;
            tailNewPosition[1] = currentTailPosition[1] - 1;
        }
        if (headPosition[0] < currentTailPosition[0] &&
            headPosition[1] < currentTailPosition[1]) {
            tailNewPosition[0] = currentTailPosition[0] - 1;
            tailNewPosition[1] = currentTailPosition[1] - 1;
        }
        if (headPosition[0] < currentTailPosition[0] &&
            headPosition[1] > currentTailPosition[1]) {
            tailNewPosition[0] = currentTailPosition[0] - 1;
            tailNewPosition[1] = currentTailPosition[1] + 1;
        }
        // [3, 5]    [2, 3] =>  [3, 4]
    }
    return tailNewPosition.length === 0 ? currentTailPosition : tailNewPosition;
}
// console.log("tails current position ", tailMovement([3, 5], [2, 3]));
//If tail is same position or same -1 === is touching
//If tailPosition[0][1] === headPosition[0][1] <> than 2 === not touching
//If false (not touching) tailPosition[0] or [1] or both move to headPosition[0] or [1] -1 (move to previous headPosition
//If both x and y position change in H both need to change in T as well.
//If head x is > or < and bigger than two numbers away tail need to === head s
const followCommands = (data) => {
    let head = [0, 0];
    let tail = [0, 0];
    let resultArray = [[0, 0]];
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
console.log("array ", dataArray2);
const result = followCommands(dataArray2);
const join = result.map((item) => item.join(""));
// const unique = result.filter((x, i, a) => a.indexOf(x) == i);
console.log("result # ", result);
const unique = join.filter((item, index) => {
    return join.indexOf(item) === index;
});
console.log("uni", unique.length);
/*===================================================================================*/
//Rope Bridge
//Get the commands for the head movement ==O
//Define how the head gets to the position ==X
//Define when the tail is touching the head ==O
//Define how the tail is following the head ==O
//Track the positions the tail has been in following the head. ==X
//Filter the list of positions the tail has been in to get unique positions  ==X
//Return number of positions tail has been in ==X
