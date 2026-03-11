import { describe, expect, it } from 'vitest';
import { Calculator } from '../src/tdd/calculator.js';
import { ApiService } from '../src/tdd/apiService.js';

describe('Calculator', () => {
  it('correctly adds two numbers', () => {
    const result = Calculator.add(2, 3);
    expect(result).toBe(5);
  });

  it('correctly subtracts two numbers', () => {
    const result = Calculator.subtract(5, 2);
    expect(result).toBe(3);
  });

  it('uses the Arrange-Act-Assert pattern for addition', () => {
    const num1 = 2;
    const num2 = 3;

    const result = Calculator.add(num1, num2);

    expect(result).toBe(5);
  });
});

describe('ApiService', () => {
  it('fetches data from the API', async () => {
    const client = {
      get: async () => ({ data: { results: [1, 2, 3] } }),
    };

    const result = await ApiService.fetchData(client);
    expect(result).toEqual([1, 2, 3]);
  });
});
