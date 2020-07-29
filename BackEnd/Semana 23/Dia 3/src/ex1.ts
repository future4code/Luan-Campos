const printAscendingOrder = (input: number) => {
  if (input >= 0) {
    printAscendingOrder(input - 1);
    console.log(input);
  }
};

const printDescendingOrder = (input: number) => {
  if (input >= 0) {
    console.log(input);
    return printDescendingOrder(input - 1);
  }
};

printAscendingOrder(4);
console.log("\n")
printDescendingOrder(4);

