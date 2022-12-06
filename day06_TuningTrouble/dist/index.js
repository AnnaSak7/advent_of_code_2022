"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
function findMarker(data) {
    let index = 0;
    for (let i = 0; i < data.length; i++) {
        let array = data.split("");
        let fourLetters = array.slice(i, i + 5);
        let hasDuplicate = fourLetters.some((val, i) => fourLetters.indexOf(val) !== i);
        if (!hasDuplicate) {
            index = i;
            break;
        }
    }
    console.log("length ", data_1.datastream.length);
    console.log("marker", index + 4);
    return index + 4;
}
findMarker(data_1.datastream);
