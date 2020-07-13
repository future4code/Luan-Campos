function checkCep(cep) {
  let count = 0;
  if (cep.length < 9) {
    return false;
  }

  if (cep.indexOf("-") === -1) {
    return false;
  }

  for (const h of cep) {
    if (h === "-") {
      count += 1;
    }
  }

  if (count > 1) {
    return false;
  }
  return true;
}

console.log(checkCep("13335-018"));
