const calcNumbers = (input: number, sum: number = 0) => {
  if (input === 0) {
    return console.log(sum);
  }

  return calcNumbers(input - 1, sum + input)
};

calcNumbers(4)