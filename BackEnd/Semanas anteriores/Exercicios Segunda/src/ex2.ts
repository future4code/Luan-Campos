function arr(array: number[]) {
  const res = { quant: array.length, oddNumbers: 0, sum: 0 };

  for (let number of array) {
    number % 3 === 0 ? (res.oddNumbers += 1) : false;
    res.sum += number;
  }

  console.log(res)
}

arr([1, 3, 5, 6]);
