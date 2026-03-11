import { describe, expect, test, vi } from 'vitest';
import { getUserInfo } from '../src/fundamentals/getUserInfo.js';

describe('Manual mocks', () => {
  test('fetches user information from the database', async () => {
    const mockDatabaseService = {
      getUserById: vi.fn().mockResolvedValue({
        id: '123',
        name: 'John Doe',
        email: 'john@example.com',
      }),
    };

    const userId = '123';
    const userInfo = await getUserInfo(userId, mockDatabaseService);

    expect(userInfo.name).toBe('John Doe');
    expect(mockDatabaseService.getUserById).toHaveBeenCalledWith(userId);
  });
});
