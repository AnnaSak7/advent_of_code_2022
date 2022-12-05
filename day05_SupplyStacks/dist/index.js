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
    return resultArray;
}
const arrangements = rearrangementIntoArray(data_1.rearrangement);
function topOfEachStack(stack) {
    const containers = [];
    stack.map((stack) => {
        let one = stack.pop();
        containers.push(one);
    });
    return containers.join("");
}
function rearrangeCrates(crates, arrangements) {
    for (let i = 0; i < arrangements.length; i++) {
        let fromCrate = crates[arrangements[i][1] - 1];
        let toCrate = crates[arrangements[i][2] - 1];
        for (let k = 0; k < arrangements[i][0]; k++) {
            let crate = fromCrate.pop();
            toCrate.push(crate);
        }
    }
    console.log("crates ", topOfEachStack(crates));
    return topOfEachStack(crates);
}
rearrangeCrates(data_1.crates, arrangements);
// =================part 2====================
function rearrangeCrates2(crates, arrangements) {
    for (let i = 0; i < arrangements.length; i++) {
        let numberOfCrates = arrangements[i][0];
        let fromCrate = crates[arrangements[i][1] - 1];
        let toCrate = crates[arrangements[i][2] - 1];
        let containers = fromCrate.slice(numberOfCrates * -1);
        fromCrate.splice(fromCrate.length - numberOfCrates, numberOfCrates);
        containers.map((letter) => toCrate.push(letter));
    }
    console.log("crates2 ", topOfEachStack(crates));
    return topOfEachStack(crates);
}
rearrangeCrates2(data_1.crates, arrangements);
