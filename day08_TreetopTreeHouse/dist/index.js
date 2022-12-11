"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
const toArray = (data) => {
    return data.split("\n");
};
const dataArray = toArray(data_1.data);
const mostOuterTreeCount = (data) => {
    const topAndBottom = data[0].length * 2;
    const side = data.length - 2;
    return topAndBottom + side;
};
console.log("topAndBottom : ", mostOuterTreeCount(dataArray));
let visible = 0;
let invisible = [];
// row index 1 : if it is visible from the top
for (let i = 1; i < dataArray[1].length; i++) {
    if (dataArray[1][i] > dataArray[0][i]) {
        visible += 1;
    }
    else {
        invisible.push(i);
    }
}
//check row(sides) visibility
//row = dataArray[1]
const checkSideVisibility = (invisibleIndex, row) => {
    let rowArray = row.split("");
    for (let i = 0; i < invisibleIndex.length; i++) {
        let elementIndex = invisibleIndex[i];
        // for (let k = 0; k < rowArray.length; k++) {
        let element = rowArray[elementIndex];
        let found = rowArray.findIndex((item) => item > element);
        console.log("found ", found);
        // }
    }
};
console.log("visible : ", visible);
console.log("invisible : ", invisible);
console.log("length : ", dataArray[1].length);
console.log("", checkSideVisibility(invisible, dataArray[1]));
