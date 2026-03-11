export interface User {
  id?: string;
  name: string;
  email?: string;
}

export interface DatabaseService {
  getUserById(userId: string): Promise<User>;
}

export async function getUserInfo(
  userId: string,
  databaseService: DatabaseService
): Promise<User> {
  const userInfo = await databaseService.getUserById(userId);
  return userInfo;
}
