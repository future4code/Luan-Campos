const isOneEdit = (original: string, modified: string): boolean => {
  if (
    modified.length < original.length - 1 ||
    modified.length > original.length + 1 ||
    original === modified
  ) {
    return false;
  }

  let charQuantity = 0;

  for (const c of modified) {
    if (original.indexOf(c) !== -1) {
      charQuantity++;
    }
  }

  if (
    charQuantity <= original.length + 1 &&
    charQuantity >= original.length - 1
  ) {
    return true;
  }
};

console.log(isOneEdit("banana", "bananaa"));
