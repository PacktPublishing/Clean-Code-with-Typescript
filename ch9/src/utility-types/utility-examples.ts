export interface UtilityUser {
  name?: string;
  age?: number;
  email?: string;
}

export type PartialUser = Partial<UtilityUser>;
export type RequiredUser = Required<Pick<UtilityUser, 'name' | 'age'>>;
export type ReadonlyUser = Readonly<Required<Pick<UtilityUser, 'name' | 'age'>>>;
export type UserSummary = Pick<Required<UtilityUser>, 'name' | 'email'>;
export type UserWithoutEmail = Omit<Required<UtilityUser>, 'email'>;

export type Roles = 'admin' | 'user' | 'guest';
export type Permissions = Record<Roles, boolean>;
export type NonAdminRoles = Exclude<Roles, 'admin'>;
export type AdminRole = Extract<Roles, 'admin'>;

export function getUser() {
  return {
    name: 'Alice',
    age: 25
  };
}

export type UserType = ReturnType<typeof getUser>;
export type PresentName = NonNullable<UtilityUser['name']>;

export const utilityExamples = {
  partialUser: { name: 'Alice' } as PartialUser,
  requiredUser: { name: 'Alice', age: 25 } as RequiredUser,
  readonlyUser: { name: 'Alice', age: 25 } as ReadonlyUser,
  userSummary: { name: 'Alice', email: 'alice@example.com' } as UserSummary,
  userWithoutEmail: { name: 'Alice', age: 25 } as UserWithoutEmail,
  permissions: {
    admin: true,
    user: false,
    guest: false
  } as Permissions,
  nonAdminRole: 'user' as NonAdminRoles,
  adminRole: 'admin' as AdminRole,
  returnedUser: getUser() as UserType,
  presentName: 'Alice' as PresentName
};
