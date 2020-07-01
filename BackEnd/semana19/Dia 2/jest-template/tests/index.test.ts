import { validateCharacter, character, performAttack } from "../src";

describe("Testing validateCharacter", () => {
  test("function must return false without a name", () => {
    const newChar: character = {
      name: "",
      life: 1500,
      str: 750,
      def: 500,
    };

    const validate = validateCharacter(newChar);

    expect(validate).toBe(false);
  });

  test("function must return true with a character that have 0 hp", () => {
    const newChar: character = {
      name: "Luan",
      life: 0,
      str: 750,
      def: 500,
    };

    const validate = validateCharacter(newChar);

    expect(validate).toBe(true);
  });

  test("function must return true with a character that have 0 str", () => {
    const newChar: character = {
      name: "Luan",
      life: 1500,
      str: 0,
      def: 500,
    };

    const validate = validateCharacter(newChar);

    expect(validate).toBe(true);
  });

  test("function must return true with a character that have 0 str", () => {
    const newChar: character = {
      name: "Luan",
      life: 1500,
      str: 750,
      def: 0,
    };

    const validate = validateCharacter(newChar);

    expect(validate).toBe(true);
  });

  test("function must return false if the character have life, str or def < 0", () => {
    const newChar: character = {
      name: "Luan",
      life: -10,
      str: 750,
      def: 500,
    };

    const validate = validateCharacter(newChar);

    expect(validate).toBe(false);
  });

  test("function must return true if the character have life, str or def = 0", () => {
    const newChar: character = {
      name: "Luan",
      life: 0,
      str: 0,
      def: 0,
    };

    const validate = validateCharacter(newChar);

    expect(validate).toBe(true);
  });

  test("function must return true if the character have valid attributes", () => {
    const newChar: character = {
      name: "Luan",
      life: 1600,
      str: 1200,
      def: 900,
    };

    const validate = validateCharacter(newChar);

    expect(validate).toBe(true);
  });
});

describe("mocking validateCharacter function", () => {
  test("Mocked function returning true", () => {
    const validateCharacter = jest.fn(() => {
      return true;
    });
  });

  test("Mocked function returning false", () => {
    const validateCharacter = jest.fn(() => {
      return false;
    });
  });
});

describe("Testing performAttack function", () => {
  test("Defender must lose 200 hp", () => {
    const validateCharacter = jest.fn(() => {
      return true;
    });
    const attacker: character = {
      name: "Luan",
      life: 1000,
      str: 700,
      def: 500,
    };

    const defender: character = {
      name: "Alt Luan",
      life: 1000,
      str: 500,
      def: 500,
    };

    performAttack(attacker, defender, validateCharacter);

    expect(defender.life).toBe(800);
    expect(validateCharacter).toBeCalled();
    expect(validateCharacter).toBeCalledTimes(2);
    expect(validateCharacter).toReturnTimes(2);
  });

  test("A character has a invalid attribute", () => {
    const validateCharacter = jest.fn(() => {
      return false;
    });
    const attacker: character = {
      name: "",
      life: 1000,
      str: 700,
      def: 500,
    };

    const defender: character = {
      name: "Alt Luan",
      life: 1000,
      str: 500,
      def: 500,
    };

    try {
      performAttack(attacker, defender, validateCharacter);
    } catch (err) {
      expect(err.message).toEqual("Invalid Character");
      expect(validateCharacter).toBeCalled();
      expect(validateCharacter).toBeCalledTimes(1);
      expect(validateCharacter).toReturnTimes(1);
    }
  });

  test("Defender must lose 0 hp", () => {
    const validateCharacter = jest.fn(() => {
      return true;
    });

    const attacker: character = {
      name: "Luan",
      life: 1000,
      str: 700,
      def: 500,
    };

    const defender: character = {
      name: "Alt Luan",
      life: 1000,
      str: 500,
      def: 1000,
    };

    performAttack(attacker, defender, validateCharacter)
  });
});
