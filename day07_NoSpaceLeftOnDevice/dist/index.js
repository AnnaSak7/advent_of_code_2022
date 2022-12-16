"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
const data00 = data_1.data.split("\n");
// const arrayOfArray: string[][] = [];
// data00.map((set: string) => {
//   let array = set.split(" ");
//   if (array.length < 3) {
//     arrayOfArray.push(array);
//   }
// });
data00.shift();
console.log("array", data00);
const second$ = data00.indexOf("$ ls", 2);
console.log("second ", second$); //8
let rootDir = data00.slice(1, second$ - 1);
console.log("mainDirs ", rootDir);
let mainDirs = rootDir.filter((item) => item.includes("dir"));
console.log("mainDirs ", mainDirs);
let mainDirNames = mainDirs.map((str) => str.slice(4));
console.log("mainDirNames ", mainDirNames);
let indexOfEachCdDir = [];
for (let i = 0; i < mainDirNames.length; i++) {
    let index = data00.indexOf(`$ cd ${mainDirNames[i]}`);
    indexOfEachCdDir.push(index);
}
console.log("indexOfEachCdDir ", indexOfEachCdDir);
// function lsSet(arr: string[][]): string[][][] {
//   let newArray: string[][][] = [];
//   let SIndexes: number[] = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i][0] === "$") {
//       SIndexes.push(i);
//     }
//   }
//   for (let k = 0; k < SIndexes.length; k++) {
//     let one: string[][] = arr.slice(SIndexes[k] + 1, SIndexes[k + 1]);
//     newArray.push(one);
//   }
//   return newArray;
// }
// function onlyDirWithFiles(arr: string[][][]): string[][][] {
//   let resultArray: string[][][] = [];
//   for (let i = 0; i < arr.length; i++) {
//     let flat: string[] = arr[i].flat();
//     if (!flat.includes("dir")) {
//       resultArray.push(arr[i]);
//     }
//   }
//   console.log("resultArray ", resultArray);
//   return resultArray;
// }
// function calc(arr: string[][][]): number {
//   let numArray: number[] = [];
//   for (let i = 0; i < arr.length; i++) {
//     let onlyNumbers = arr[i].forEach((item: string[]) => {
//       numArray.push(+item[0]);
//     });
//   }
//   let array100000 = numArray.filter((item: number) => item <= 100000);
//   console.log("numArray ", array100000);
//   const sum = array100000.reduce((a, b) => a + b);
//   console.log("sum ", sum);
//   return sum;
// }
// const first = lsSet(arrayOfArray);
// const second = onlyDirWithFiles(first);
// const third = calc(second);
// console.log("numbers ", third);
// // console.log("array : ", arrayOfArray);
let main = {
    dscbfp: {
        fgtvzpl: {
            fvrghzfg: {
                // < 100,000
                "cjb.nwg": 212295,
                ftqs: {
                    // < 100,000
                    mmhtpz: 250415,
                },
            },
            "lbbg.rhq": 28513,
        },
        hgfrgbv: {},
        hmwqgjnl: {},
        jvr: {},
        lcvdgm: {},
        mmhtpz: {},
    },
    fsdfddfv: 283653,
    mjzqq: {},
    "rcm.psp": 241330,
    sjbpgc: {},
    zfsbvs: {},
};
// key
//  value is number? === file
//  value is object? === directory
// sum(result, dir key, dirTree){
//   key is file?
//     result[dir] += (size + sum())
//   key is directory?
//     result[key] = sum()
// }
// {dir: size}
// recursive function that goes through a list without using for loop
//const sumValues = obj => Object.values(obj).reduce((a, b) => a + b, 0);
