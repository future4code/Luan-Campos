import { performPurchase } from "../src/index";
import { User } from "../src/index";

describe("Testes", () => {
  test("Usuario com saldo MAIOR do que o da compra", () => {
    const luan: User = {
      name: "Luanzinho",
      balance: 350,
    };

    const func = performPurchase(luan, 200);

    expect(func.balance).toBe(150);
  });

  test("Usuario com saldo IGUAL ao da compra", () => {
    const luan: User = {
      name: "Luanzinho",
      balance: 350,
    };

    const func = performPurchase(luan, 350);

    expect(func.balance).toBe(0);
  });

  test("Usuario com saldo MENOR ao da compra", () => {
    const luan: User = {
      name: "Luanzinho",
      balance: 350,
    };

    const func = performPurchase(luan, 400);

    expect(func).toBe(undefined);
  });
});
