import { PerTotal } from '../src/rules/percent/index.js';

describe('Rule per item', () => {
  let item: PerTotal;
  beforeEach(() => {
    item = new PerTotal(10, 30);
  });
  it('should construct the class item', () => {
    expect(item).toBeInstanceOf(PerTotal);
  });
});
