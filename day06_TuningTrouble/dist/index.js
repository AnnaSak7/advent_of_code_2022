"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
function findMarker(data) {
    let index = 0;
    for (let i = 0; i < data.length; i++) {
        let array = data.split("");
        let fourLetters = array.slice(i, i + 4);
        let hasDuplicate = fourLetters.some((val, i) => fourLetters.indexOf(val) !== i
        //[a, b, c, a]
        // (a, 0)
        //(b, 1)
        //(c, 2)
        //(a, 3)
        );
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
//=======Part 2===========
function findMarker14(data) {
    let index = 0;
    for (let i = 0; i < data.length; i++) {
        let array = data.split("");
        let fourLetters = array.slice(i, i + 14);
        let hasDuplicate = fourLetters.some((element, index) => fourLetters.indexOf(element) !== index);
        if (!hasDuplicate) {
            index = i;
            break;
        }
    }
    console.log("length2 ", data_1.datastream.length);
    console.log("marker2", index + 14);
    return index + 14;
}
findMarker14(data_1.datastream);
