import { validateCharacter, character } from "../src";

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
