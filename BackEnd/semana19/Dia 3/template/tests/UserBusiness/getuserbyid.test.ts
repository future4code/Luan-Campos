import { UserBusiness } from "../../src/business/UserBusiness";
import { User, stringToUserRole, UserRole } from "../../src/model/User";

describe("Testing UserBusiness.getUserById", () => {
  let userDatabase = {};
  let hashGenerator = {};
  let tokenGenerator = {};
  let idGenerator = {};

  test("Should return 'User not found' for an invalid/inexistent ID", async () => {
    expect.assertions(2);
    try {
      const getUserById = jest.fn();
      userDatabase = { getUserById };

      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.getUserById("23");
    } catch (err) {
      expect(err.message).toBe("User not found");
      expect(err.errorCode).toBe(404);
    }
  });

  test("Should call all mocked functions", async () => {
    const getUserById = jest.fn(
      (id: string) =>
        new User(
          "a",
          "Luan",
          "luan@gmail.com",
          "hash",
          stringToUserRole("ADMIN")
        )
    );

    userDatabase = { getUserById };
    const userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    );

    const user = await userBusiness.getUserById("a");

    expect(getUserById).toHaveBeenCalled();
    expect(getUserById).toHaveBeenCalledWith("a");
    expect(user).toEqual({
      id: "a",
      name: "Luan",
      email: "luan@gmail.com",
      password: "hash",
      role: UserRole.ADMIN,
    });
  });
});
