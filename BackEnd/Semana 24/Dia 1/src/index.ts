const f = (arr: number[]): number => {
  const total = 5050;
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return total - sum;
};
