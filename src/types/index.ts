export type productType = {
  code: string;
  name: string;
  price: number;
};

export type rulesType = {
  percent?: number;
  limit?: number;
  code?: string;
  minItem?: number;
  discount?: number;
};
