import { PerItem } from '../src/rules/item/index.js';

describe('Rule per item', () => {
  let item: PerItem;
  beforeEach(() => {
    item = new PerItem('001', 2, 30);
  });
  it('should construct the class item', () => {
    expect(item).toBeInstanceOf(PerItem);
  });
});
