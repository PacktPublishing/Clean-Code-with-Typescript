import { User } from '../models/User';

export class UserService {
  getUser(id: number): User {
    return new User(id, 'John Doe');
  }
}
