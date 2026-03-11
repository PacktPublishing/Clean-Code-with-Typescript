import { describe, expect, test, vi } from 'vitest';
import databaseService from '../src/fundamentals/databaseService.js';
import { getUserInfoWithModule } from '../src/fundamentals/getUserInfoWithModule.js';

vi.mock('../src/fundamentals/databaseService.js', () => ({
  default: {
    getUserById: vi.fn(),
  },
}));

describe('Module mocks', () => {
  test('uses a module mock to fetch data', async () => {
    vi.mocked(databaseService.getUserById).mockResolvedValue({
      name: 'Jane Doe',
    });

    const userInfo = await getUserInfoWithModule('123');

    expect(userInfo.name).toBe('Jane Doe');
    expect(databaseService.getUserById).toHaveBeenCalledWith('123');
  });
});
