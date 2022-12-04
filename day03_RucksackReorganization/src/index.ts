import { input } from "./data";

const priorities: {} = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
};

function separateInto2(items: string): string[][] {
  const numberOfItems: number = items.length / 2;
  const firstCompartment: string = items.slice(0, numberOfItems);
  const secondCompartment: string = items.slice(numberOfItems);
  return [firstCompartment.split(""), secondCompartment.split("")];
}

function findSharedLetter(set: string[][]): string {
  let sameLetter: string = "";
  set[0].find((letter: string) => {
    for (let i = 0; i < set[1].length; i++) {
      if (set[1][i] === letter) {
        sameLetter = letter;
      }
    }
  });
  return sameLetter;
}

function rucksackReorganizer(input: string): number {
  let sum: number = 0;
  const arrayOfRucksack: string[] = input.split("\n");
  arrayOfRucksack.map((rucksack: string) => {
    const separatedItems = separateInto2(rucksack);
    let theSharedLetter: string = findSharedLetter(separatedItems);
    let keys: string[] = Object.keys(priorities);
    let index: number = keys.indexOf(theSharedLetter);
    let point: any = Object.values(priorities)[index];
    sum += point;
  });
  return sum;
}

console.log("part 1", rucksackReorganizer(input));

//========part 2 ============

function separateIntoGroupRucksacks(arr: string[]): string[][] {
  const perGroup = 3;

  const result = arr.reduce(
    (resultArray: string[][], item: string, index: number): string[][] => {
      const groupIndex = Math.floor(index / perGroup);

      if (!resultArray[groupIndex]) {
        resultArray[groupIndex] = []; // start a new group
      }

      resultArray[groupIndex].push(item);

      return resultArray;
    },
    []
  );

  return result;
}

function findBadge(group: string[]): string {
  let first: string[] = group[0].split("");
  let second: string[] = group[1].split("");
  let third: string[] = group[2].split("");

  let sameLetter: string[] = [];
  first.find((letter: string) => {
    for (let i = 0; i < second.length; i++) {
      if (second[i] === letter) {
        sameLetter.push(letter);
      }
    }
  });

  let badge: any = third.find((letter: string) => {
    for (let i = 0; i < sameLetter.length; i++) {
      if (sameLetter[i] === letter) {
        return letter;
      }
    }
  });
  return badge;
}

function groupRucksackOrganizer(data: string) {
  let sum: number = 0;
  const arrayOfRucksack = data.split("\n");
  const arrayOfArrays: string[][] = separateIntoGroupRucksacks(arrayOfRucksack);
  arrayOfArrays.map((group: string[]) => {
    let badge = findBadge(group);
    let keys: string[] = Object.keys(priorities);
    let index: number = keys.indexOf(badge);
    let point: any = Object.values(priorities)[index];
    sum += point;
  });
  return sum;
}

console.log("part 2", groupRucksackOrganizer(input));
