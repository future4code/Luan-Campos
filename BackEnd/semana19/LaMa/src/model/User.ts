export class User {
  static mapStringToRole(role: string) {
    switch (role) {
      case "normal":
        return Role.NORMAL;
      case "admin":
        return Role.ADMIN;
      default:
        return Role.NORMAL;
    }
  }
}

export enum Role {
  NORMAL = "normal",
  ADMIN = "admin",
}
