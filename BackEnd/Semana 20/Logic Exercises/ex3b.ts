function compare(text: string, text2: string): Boolean {
  if (text.toLowerCase() === text2.toLowerCase()) {
    return true;
  }
  return false;
}

console.log(compare("luan", "luAn"));
