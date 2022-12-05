"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
function rearrangementIntoArray(str) {
    const strToArray = str.split("\n");
    let resultArray = [];
    strToArray.map((set) => {
        let oneSet = set.split(",");
        let oneSetNum = oneSet.map((item) => +item);
        resultArray.push(oneSetNum);
    });
    console.log("array", resultArray);
    return resultArray;
}
const arrangements = rearrangementIntoArray(data_1.rearrangement);
function rearrangeCrates(crates, arrangements) {
    for (let i = 0; i < arrangements.length; i++) {
        let fromCrate = crates[arrangements[i][1] - 1];
        let toCrate = crates[arrangements[i][2] - 1];
        for (let k = 0; k < arrangements[i][0]; k++) {
            let crate = fromCrate.pop();
            toCrate.push(crate);
        }
    }
    console.log("crates ", crates);
    return crates;
}
rearrangeCrates(data_1.crates, arrangements);
