import { datastream } from "./data";

function findMarker(data: string): number {
  let index: number = 0;
  for (let i = 0; i < data.length; i++) {
    let array = data.split("");
    let fourLetters = array.slice(i, i + 4);
    let hasDuplicate = fourLetters.some(
      (val, i) => fourLetters.indexOf(val) !== i
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
  console.log("length ", datastream.length);
  console.log("marker", index + 4);
  return index + 4;
}

findMarker(datastream);

//=======Part 2===========
function findMarker14(data: string): number {
  let index: number = 0;
  for (let i = 0; i < data.length; i++) {
    let array = data.split("");
    let fourLetters = array.slice(i, i + 14);
    let hasDuplicate = fourLetters.some(
      (element, index) => fourLetters.indexOf(element) !== index
    );
    if (!hasDuplicate) {
      index = i;
      break;
    }
  }
  console.log("length2 ", datastream.length);
  console.log("marker2", index + 14);
  return index + 14;
}

findMarker14(datastream);
