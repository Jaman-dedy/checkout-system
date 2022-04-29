import { Checkout } from '../src/checkout/index.js';

const rules = [{ percent: 10, limit: 30 }];
const products = [{ code: '001', name: 'Curry sauce', price: 1.95 }];
const basket = [
  { code: '001', name: 'Curry sauce', price: 1.95 },
  { code: '002', name: 'Pizza', price: 5.99 },
  { code: '002', name: 'Pizza', price: 5.99 },
  { code: '003', name: 'Men T-Shirt', price: 25 },
];

describe('checkout', () => {
  let checkout: Checkout;
  beforeEach(() => {
    checkout = new Checkout(rules, products);
  });

  it('should checkout ', () => {
    expect(checkout).toBeInstanceOf(Checkout);
  });
  it('should scan an item with a valid code ', () => {
    const validCode = '001';
    const result = checkout.scan(validCode);
    expect(typeof checkout.scan).toBe('function');
    expect(result).toBeUndefined();
  });
  it('should throw an an error if item code does not exist', () => {
    const invalidCode = '005';
    const res = checkout.scan(invalidCode);
    expect(res).toBeUndefined();
  });
  it('should apply the rules after scanning an item', () => {
    const res = checkout.applyRules(rules, basket);
    expect(typeof checkout.applyRules).toBe('function');
    expect(res).toBeGreaterThan(0);
  });
  it('should get the checkout total', () => {
    expect(typeof checkout.total).toBe('function');
    const res = checkout.total();
    expect(res).toBeUndefined();
  });
});
