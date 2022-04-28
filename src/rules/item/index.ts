export class PerItem {
  code: string;
  minItem: number;
  discount: number;

  constructor(code: string, minItem: number, discount: number) {
    this.code = code;
    this.minItem = minItem;
    this.discount = discount;
  }
}
