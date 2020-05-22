function numbers(a: number, b: number): void {
  const res = { sum: a + b, sub: a - b, mult: a * b, maior: 0 };

  a > b ? (res.maior = a) : (res.maior = b);

  console.log(res);
}

numbers(3, 6);
