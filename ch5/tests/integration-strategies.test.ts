import { describe, expect, test } from 'vitest';
import { checkout } from '../src/fundamentals/checkout.js';
import { saveToDatabase } from '../src/fundamentals/dbModule.js';

describe('Integration strategy examples', () => {
  test('uses a stub for top-down style testing', () => {
    const taxServiceStub = {
      calculateTax: (_amount: number) => 10.0,
    };

    const total = checkout(100.0, taxServiceStub);
    expect(total).toBe(110.0);
  });

  test('uses a driver-like helper for bottom-up style testing', async () => {
    const testDriver = async () => {
      return saveToDatabase({ id: 1, title: 'Test' });
    };

    const result = await testDriver();
    expect(result.success).toBe(true);
    expect(result.record.title).toBe('Test');
  });
});
