import { User } from '../models/User';

export function createUserForTest(): User {
  const user = new User(1, 'Alice');
  return user;
}
