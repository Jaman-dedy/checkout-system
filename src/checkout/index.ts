type rulesType = {
  percent?: number;
  limit?: number;
  code?: string;
  minItem?: number;
  discount?: number;
};
type productType = {
  code: string;
  name: string;
  price: number;
};
const basket: Array<productType> = [];
let totalPrice;

export class Checkout {
  rules: Array<rulesType>;
  products: Array<productType>;

  constructor(rules: Array<rulesType>, products: Array<productType>) {
    this.products = products;
    this.rules = rules;
  }

  scan(code: string) {
    if (!this.validItem(code)) {
      console.log(`code ${code} is not a valid item code`);
    }
    this.products.map((item) => {
      if (item.code == code) {
        basket?.push(item);
      }
    });
  }
  applyRules(rules: Array<rulesType>, basket: Array<productType>) {
    console.log(`basket`, basket);
    totalPrice = basket.reduce((n, { price }) => n + price, 0);
    console.log(`totalPrice :->`, totalPrice);
    const item_code = '002';
    const count = this.checkOccurency(basket, item_code);
    console.log(`count`, count);
    for (const rule of rules) {
      if (rule?.limit < totalPrice) {
        totalPrice = totalPrice - (totalPrice * rule?.percent) / 100;
      }
      if (count >= 2) {
        totalPrice = totalPrice - 3.99;
      }
      return totalPrice;
    }
  }
  checkOccurency(basket, item_code) {
    const count = basket.reduce((a, b) => (b.code === item_code ? ++a : a), 0);
    return count;
  }
  total() {
    this.applyRules(this.rules, basket);
    return console.log(`totalPrice`, totalPrice.toFixed(2));
  }
  validItem(code: string) {
    return this.products.find((item) => item.code == code);
  }
}
