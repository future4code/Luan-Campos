function f(n) {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }

  return result;
}

console.log(f(0)); // 1
console.log(f(5)); // 120
console.log(f(6)); // 720
