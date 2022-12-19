"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
const formatData = (data) => {
    const dataStrings = data.split("\n");
    dataStrings.shift();
    let arrayData = dataStrings.map((item) => {
        if (item.includes("$ cd")) {
            let newItem = item.replace(/\$\s/g, "$");
            return newItem.split(" ");
        }
        else {
            return item.split(" ");
        }
    });
    const arrayDataToObject = arrayData.map((x) => ({
        a: x[0],
        b: x[1],
    }));
    console.log("toObject", arrayDataToObject);
    return arrayDataToObject;
};
const arrayData = formatData(data_1.data);
console.log("array Data ", arrayData);
const isMapping = arrayData.reduce((acc, el, i) => {
    acc[el.a] = i;
    return acc;
});
console.log("isMapping ", isMapping);
// const isMapping = arrayData.reduce((acc:any, el:AB, i:number)=>{
//   acc[el.a] = i;
//   return acc;
// },{});
// const createRootObj = (data: string) => {
//   const dataStrings = formatData(data);
//   const second$ = dataStrings.indexOf("$ ls", 2);
//   let rootDir = dataStrings.slice(1, second$ - 1);
//   let folderSystem: any = new Object();
//   rootDir.map((str) => {
//     if (str.includes("dir")) {
//       let directory = str.split(" ");
//       let dirname = directory[1];
//       folderSystem[`${dirname}`] = {};
//     } else {
//       let file = str.split(" ");
//       folderSystem[`${file[1]}`] = +file[0];
//     }
//   });
//   return folderSystem;
// };
// const createObj = (data: string[], folderSystem: any, folderName: string) => {
//   const second$ = data.indexOf("$ ls", 1 );
//   let rootDir = data.slice(1, second$ - 1);
//   rootDir.map((str) => {
//     if (str.includes("dir")) {
//       let directory = str.split(" ");
//       let dirname = directory[1];
//       folderSystem.folderName[`${dirname}`] = {};
//     } else {
//       let file = str.split(" ");
//       folderSystem.folderName[`${file[1]}`] = +file[0];
//     }
//   });
//   return folderSystem;
// };
// const rootObj = createRootObj(data);
// console.log({ rootObj });
// const formattedData = formatData(data);
// let arrayOfCommands = formattedData.map((str: string) => str.split(" "));
// let x = arrayOfCommands.find((item) => item.includes("cd"));
// let index = arrayOfCommands.indexOf(x!);
// rootObj[`${x![3]}`];
// let folderName = x![3];
// console.log({ x });
// console.log({ index });
// let sliced = formattedData.slice(7 + 2);
// rootObj.dscbfp["fgtvzpl"] = {};
// rootObj.dscbfp["hgfrgbv"] = {};
// rootObj.dscbfp["hmwqgjnl"] = {};
// rootObj.dscbfp["jvr"] = {};
// console.log("root 2 ", rootObj);
// const arrayOfArray: string[][] = [];
// data00.map((set: string) => {
//   let array = set.split(" ");
//   if (array.length < 3) {
//     arrayOfArray.push(array);
//   }
// });
// let mainDirs = rootDir.filter((item: string) => item.includes("dir"));
// console.log("mainDirs ", mainDirs);
// let mainDirNames: string[] = mainDirs.map((str: string) => str.slice(4));
// console.log("mainDirNames ", mainDirNames);
// let indexOfEachCdDir: number[] = [];
// for (let i = 0; i < mainDirNames.length; i++) {
//   let index = data00.indexOf(`$ cd ${mainDirNames[i]}`);
//   indexOfEachCdDir.push(index);
// }
// console.log("indexOfEachCdDir ", indexOfEachCdDir);
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
/* function checkNested(obj: any, level: string, ...rest: any): boolean {
  if (obj === undefined) return false;
  if (rest.length == 0 && main.hasOwnProperty(level)) return true;
  return checkNested(obj[level], ...rest);
} */
// s
/* console.log("has own property ", main.hasOwnProperty("ftqs")); */
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
// don't forget to break the recursive
//const sumValues = obj => Object.values(obj).reduce((a, b) => a + b, 0);
// finding key in nested object
// function checkNested(obj:any, level:string, ...rest:any):boolean {
//   if (obj === undefined) return false;
//   if (rest.length == 0 && obj.hasOwnProperty(level)) return true;
//   return checkNested(obj[level], ...rest);
// }
const commands = data_1.data.split("\n");
console.log("commands ", commands);
let path = "/";
let dirs = { "/home": 0 };
for (let command in commands) {
    // Commands that start with $
    if (command[0] === "$") {
        // Do nothing when listing
        if (command.includes("ls")) {
            //pass
        }
        else if (command.includes("cd")) {
            if (command.includes("/")) {
                path = ".home";
            }
            else if (command.includes("..")) {
                path = path[path.lastIndexOf("/")];
            }
            else {
                let dir_name = command.slice(5);
                path = path + "/" + dir_name;
                Object.assign(dirs, { path: 0 });
            }
        }
    }
    else if (command.slice(0, 3) === "dir") {
        //pass
    }
    else {
        let size = +command.substring(0, command.indexOf(" "));
        let dir = path;
        let count = (path.match(new RegExp("/")) || []).length;
        for (let i = 0; i < count; i++) { }
    }
}
