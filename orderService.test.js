const { calculateOrderTotal } = require('./orderService');

describe('Order Service - calculateOrderTotal', () => {
  test('returns 0 for empty item list', () => {
    expect(calculateOrderTotal([])).toBe(0);
  });

  test('calculates total without discount', () => {
    const items = [
      { itemId: 'item1', quantity: 2, pricePerUnit: 50 },
      { itemId: 'item2', quantity: 1, pricePerUnit: 100 },
    ];
    expect(calculateOrderTotal(items)).toBe(200);
  });

  test('calculates total with discount', () => {
    const items = [
      { itemId: 'item1', quantity: 3, pricePerUnit: 30 },
      { itemId: 'item2', quantity: 2, pricePerUnit: 40 },
    ];
    expect(calculateOrderTotal(items, 10)).toBe(162); // 180 - 10%
  });

  test('throws error for invalid item data', () => {
    const items = [
      { itemId: 'item1', quantity: -1, pricePerUnit: 30 },
      { itemId: 'item2', quantity: 2, pricePerUnit: 40 },
    ];
    expect(() => calculateOrderTotal(items)).toThrow('Invalid item data');
  });

  test('handles large orders', () => {
    const largeOrder = Array(1000).fill({ itemId: 'item', quantity: 1, pricePerUnit: 1 });
    expect(calculateOrderTotal(largeOrder)).toBe(1000);
  });
});