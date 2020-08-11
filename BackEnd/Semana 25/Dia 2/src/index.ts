interface charactersHash {
  [index: string]: number;
}

const generateStringHash = (input: string): charactersHash => {
  const hashInput: charactersHash = {};

  for (const c of input) {
    // Verifica se possui o caracter dentro da hash, se não tiver, ele cria um no else
    if (hashInput[c]) {
      hashInput[c]++;
    } else {
      hashInput[c] = 1;
    }
  }

  return hashInput;
};

const isAnagram = (stringA: string, stringB: string): boolean => {
  if (stringA.length !== stringB.length) {
    return false;
  }

  const hashStringA = generateStringHash(stringA);
  const hashStringB = generateStringHash(stringB);

  for (const key in hashStringA) {
    if (hashStringA[key] !== hashStringB[key]) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("banana", "ananab"));
