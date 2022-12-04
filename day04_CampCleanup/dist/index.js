"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
function stringDataToArrayOfArrays(data) {
    const arrayOfSets = data.split("\n");
    const arrayOfArray = [];
    arrayOfSets.map((pairs) => {
        let splittedPairs = pairs.split(",");
        let splittedPairsInArray = splittedPairs.map((numbers) => {
            arrayOfArray.push(numbers.split("-"));
        });
    });
    return arrayOfArray;
}
function pair2arrays(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i += 2) {
        let pair = arr[i].concat(arr[i + 1]);
        newArray.push(pair);
    }
    return newArray;
}
function numberOfRangeFullyContained(data) {
    const dataInArray = stringDataToArrayOfArrays(data);
    const pairArrays = pair2arrays(dataInArray);
    let containedCount = 0;
    for (let i = 0; i < pairArrays.length; i++) {
        if (+pairArrays[i][0] === +pairArrays[i][1] &&
            +pairArrays[i][2] <= +pairArrays[i][0] &&
            +pairArrays[i][0] <= +pairArrays[i][3]) {
            containedCount += 1;
        }
        else if (+pairArrays[i][2] === +pairArrays[i][3] &&
            +pairArrays[i][0] <= +pairArrays[i][2] &&
            +pairArrays[i][2] <= +pairArrays[i][1]) {
            containedCount += 1;
        }
        else if (+pairArrays[i][0] <= +pairArrays[i][2] &&
            +pairArrays[i][1] >= +pairArrays[i][3]) {
            containedCount += 1;
        }
        else if (+pairArrays[i][0] >= +pairArrays[i][2] &&
            +pairArrays[i][1] <= +pairArrays[i][3]) {
            containedCount += 1;
        }
    }
    // console.log("count ", containedCount);
    return containedCount;
}
numberOfRangeFullyContained(data_1.input);
