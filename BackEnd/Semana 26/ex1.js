const returnIndex = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }

    if (target < array[0]) {
      return 0;
    }

    if (target > array[array.length - 1]) {
      return array.length;
    }

    if (array[i - 1] < target && array[i] > target) {
      return i;
    }
  }
};

console.log(returnIndex([1, 3, 5, 6, 8, 10], 7));
