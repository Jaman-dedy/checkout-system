import { Item } from '../src/item/index.js';

describe('Item', () => {
  let item: Item;
  beforeEach(() => {
    item = new Item('001', 'pizza', 1.95);
  });
  it('should construct the class item', () => {
    expect(item).toBeInstanceOf(Item);
  });
});
