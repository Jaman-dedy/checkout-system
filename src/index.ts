/* eslint-disable prefer-const */
import { Item } from './item/index.js';
import { PerTotal } from './rules/percent/index.js';
import { PerItem } from './rules/item/index.js';
import { Checkout } from './checkout/index.js';
import { productType, rulesType } from './types/index';

let products: Array<productType>;
let rules: Array<rulesType>;

const item_001 = new Item('001', 'Curry sauce', 1.95);
const item_002 = new Item('002', 'Pizza', 5.99);
const item_003 = new Item('003', "Men's T-Shirt", 25.0);

const rule_001 = new PerTotal(10, 30);
const rule_002 = new PerItem('002', 2, 3);

products = [{ ...item_001 }, { ...item_002 }, { ...item_003 }];
rules = [{ ...rule_001 }, { ...rule_002 }];

const co = new Checkout(rules, products);

co.scan('001');
co.scan('002');
co.scan('002');
co.scan('003');
co.total();
