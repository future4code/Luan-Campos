function f(text: string): object {
  const caracters = text.length;
  const first = text[0];
  const last = text[text.length - 1];
  return { caracters, first, last };
}

console.log(f("luanzinho"));
