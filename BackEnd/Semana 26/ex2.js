const moveZeros = (array) => {
  let newArray = [];
  let zeroCounter = 0;
  array.forEach((number) => {
    if (number !== 0) {
      newArray.push(number);
    }

    if (number === 0) {
      zeroCounter += 1;
    }
  });

  for (let i = 0; i < zeroCounter; i++) {
    newArray.push(0);
  }

  return newArray;
};

console.log(moveZeros([0, 3, 0, 0, 4, 0, 5]));
