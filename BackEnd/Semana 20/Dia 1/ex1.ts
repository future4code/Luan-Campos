function n(arr: number[]) {
  let sum: number = 0;
  let quant: number = 0;
  let mult: number = 1;
  for (const val of arr) {
    sum += val;
    mult = mult * val;
    quant += 1;
  }

  return { Soma: sum, Quantidade: quant, Multiplicação: mult };
}

console.log(n([2, 4, 6, 7]));
