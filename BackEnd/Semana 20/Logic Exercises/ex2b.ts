function s(text: string): Array<String> {
  let caracters = [];

  for (const t of text) {
    caracters.push(t);
  }
  return caracters;
}

console.log(s("sorvete"))