export interface character {
  name: string;
  life: number;
  str: number;
  def: number;
}

const newChar: character = {
  name: "Luan",
  life: 1500,
  str: 750,
  def: 500,
};

export function validateCharacter(char: character): Boolean {
  if (
    !char.name ||
    char.life === undefined ||
    char.str === undefined ||
    char.def === undefined
  ) {
    return false;
  }

  if (char.life < 0 || char.str < 0 || char.def < 0) {
    return false;
  }

  return true;
}

console.log(validateCharacter(newChar))