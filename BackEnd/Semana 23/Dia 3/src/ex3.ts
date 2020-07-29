const printArrElements = (input: any[], index: number = input.length - 1) => {
  if (index < 0) {
    return;
  }

  printArrElements(input, index - 1)
  console.log(input[index])
};

printArrElements(["oi", 1, "terceiro", "palmeiras", "ditto"])