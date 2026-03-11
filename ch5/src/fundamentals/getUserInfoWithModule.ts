import databaseService from './databaseService.js';
import type { User } from './getUserInfo.js';

export async function getUserInfoWithModule(userId: string): Promise<User> {
  return databaseService.getUserById(userId);
}
