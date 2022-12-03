import { input } from "./data";

const priorities: {} = {
  1: "a",
  2: "b",
  3: "c",
  4: "d",
  5: "e",
  6: "f",
  7: "g",
  8: "h",
  9: "i",
  10: "j",
  11: "k",
  12: "l",
  13: "m",
  14: "n",
  15: "o",
  16: "p",
  17: "q",
  18: "r",
  19: "s",
  20: "t",
  21: "u",
  22: "v",
  23: "w",
  24: "x",
  25: "y",
  26: "z",
  27: "A",
  28: "B",
  29: "C",
  30: "D",
  31: "E",
  32: "F",
  33: "G",
  34: "H",
  35: "I",
  36: "J",
  37: "K",
  38: "L",
  39: "M",
  40: "N",
  41: "O",
  42: "P",
  43: "Q",
  44: "R",
  45: "S",
  46: "T",
  47: "U",
  48: "V",
  49: "W",
  50: "X",
  51: "Y",
  52: "Z",
};

function separateInto2(items: string): string[] {
  const numberOfItems: number = items.length / 2;
  const firstCompartment: string = items.slice(0, numberOfItems);
  const secondCompartment: string = items.slice(numberOfItems);
  return [firstCompartment, secondCompartment];
}

function rucksackReorganizer(input: string) {
  const arrayOfRucksack: string[] = input.split("\n");
  arrayOfRucksack.map((rucksack: string) => {
    const separatedItems = separateInto2(rucksack);
  });
}

rucksackReorganizer(input);
