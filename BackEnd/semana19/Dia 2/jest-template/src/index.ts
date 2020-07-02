export interface character {
  name: string;
  life: number;
  str: number;
  def: number;
}

const char1: character = {
  name: "Luan",
  life: 1500,
  str: 1000,
  def: 500,
};

const char2: character = {
  name: "Jonas",
  life: 1700,
  str: 600,
  def: 900,
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

export function performAttack(
  attacker: character,
  defender: character,
  validator: (any: character) => Boolean
) {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("Invalid Character");
  }

  if (defender.def < attacker.str) {
    defender.life -= attacker.str - defender.def;
  }

  return {
    defender,
  };
}

// console.log(performAttack(char1, char2, validateCharacter));
