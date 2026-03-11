import type { User } from './getUserInfo.js';

const databaseService = {
  async getUserById(userId: string): Promise<User> {
    return {
      id: userId,
      name: 'Jane Doe',
    };
  },
};

export default databaseService;
