function f(arr: number[]): Object {
  let maior: number = 0;
  let menor: number = 999999999999999999999;
  for (const val of arr) {
    val > maior ? (maior = val) : false;
    val < menor ? (menor = val) : false;
  }
  return { maior, menor };
}

console.log(f([-10, 3, -30, 5, 567]));
