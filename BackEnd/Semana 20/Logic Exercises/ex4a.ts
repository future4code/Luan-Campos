function identifier(text: string): Boolean {
  const reg = text.replace(/\D/g, "");
  if (reg.length !== text.length) {
    return false;
  }
  return true;
}

console.log(identifier("luan777")); // false
console.log(identifier("56456")); // true
