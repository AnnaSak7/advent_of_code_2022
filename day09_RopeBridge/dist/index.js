"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
const dataArray = data_1.data.split("\n").map((item) => item.split(" "));
console.log("dataArray", dataArray);
function headCommands(set, headPosition) {
    //["R", 2]
    if (set[0] === "R") {
        headPosition[0] += +set[1];
    }
    else if (set[0] === "L") {
        headPosition[0] -= +set[1];
    }
    else if (set[0] === "U") {
        headPosition[1] += +set[1];
    }
    else if (set[0] === "D") {
        headPosition[1] -= +set[1];
    }
    return headPosition;
}
function tailCommands(headPosition, currentTailPosition) {
    //["R", 2]
    if (headPosition[0] > currentTailPosition[0]) {
        currentTailPosition[0] += headPosition[0] - 1;
    }
    if (headPosition[1] > currentTailPosition[1]) {
        currentTailPosition[1] += headPosition[1] - 1;
    }
    return currentTailPosition;
}
console.log("command ", headCommands(["U", "5"], [0, -2]));
console.log("tailcommand ", tailCommands([0, 2], [1, 0]));
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
