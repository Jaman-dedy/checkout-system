# Checkout system

[![checkout.js CI](https://github.com/Jaman-dedy/checkout-system/actions/workflows/github.js.yml/badge.svg)](https://github.com/Jaman-dedy/checkout-system/actions/workflows/github.js.yml)
[![TypeScript version][ts-badge]][typescript-4-6]

checkout system that can scan items in any order and apply certain promotional
campaigns to give discounts. The system needs to be flexible regarding the promotional rules.

## Installation

[Nodejs](https://nodejs.org/en/) is required to run the current project.
After installing node, clone the repository then navigate to checkout-system to install the dependencies

```
$ git@github.com:Jaman-dedy/checkout-system.git
$ cd checkout-system
$ npm install
```

## Available Scripts

- `clean` - remove coverage data, Jest cache and transpiled files,
- `prebuild` - lint source files and tests before building,
- `build` - transpile TypeScript to ES6,
- `build:watch` - interactive watch mode to automatically transpile source files,
- `lint` - lint source files and tests,
- `test` - run tests,
- `test:watch` - interactive watch mode to automatically re-run tests

## Usage

Following the below test case, you can run the project and get expected result
| | Items in basket | Total price |
| :--- | :----: | ---: |
| Test 3 | 002, 001, 002, 003 | 31.04 € |

Run :

```
npm run start
```

## How to test all the cases step by step

Open the project, navigate to the `src` file, open `index.ts` file

```js
// First thing, we import all the all the class needed to be tested
// Item class we'll be needed to add items to the system
import { Item } from './item/index.js';
// We need to add rules to the system, these two classes are needed for that
import { PerTotal } from './rules/percent/index.js';
import { PerItem } from './rules/item/index.js';

//Here we import the checkout class, the types and constants
import { Checkout } from './checkout/index.js';
import { productType, rulesType } from './types/index';
import {
  ITEM_CODE,
  DISCOUNT_PERCENT,
  THRESHOLD,
  MIN_ITEM,
  DISCOUNT,
} from './constants/index.js';

// Let us first define the arrays which will help us to store the products and rules

let products: Array<productType>;
let rules: Array<rulesType>;

// Now we can add more item to the system

const item_001 = new Item('001', 'Curry sauce', 1.95);
const item_002 = new Item('002', 'Pizza', 5.99);
const item_003 = new Item('003', "Men's T-Shirt", 25.0);

// The items are being stored in the products array in order to use them in the system

products = [{ ...item_001 }, { ...item_002 }, { ...item_003 }];

// Let us now add promotional rules and store them into the system

// For instance : we will apply 10% discount to orders over 30 €

const rule_001 = new PerTotal(DISCOUNT_PERCENT, THRESHOLD);

// Here for instance : we will drop the total prize by 3.99 €, if a customer buys 2 or more item 002

const rule_002 = new PerItem(ITEM_CODE, MIN_ITEM, DISCOUNT);

// Then we store the rules to be added in the system

rules = [{ ...rule_001 }, { ...rule_002 }];

// Now we have the items and the rules added we can then checkout.
// Let us initialize the checkout system with the rules and the products

const co = new Checkout(rules, products);

// The checkout system has methods to scan the item and add it to the basket and give back the total

co.scan('001');
co.scan('002');
co.scan('002');
co.scan('003');

price = co.total();
price = 31.05€

```

## Future improvement

- Improve the actual design by adding model for ; Item, Rules, and stores these in the database

[ts-badge]: https://img.shields.io/badge/TypeScript-4.6-blue.svg
[typescript]: https://www.typescriptlang.org/
[typescript-4-6]: https://devblogs.microsoft.com/typescript/announcing-typescript-4-6/
