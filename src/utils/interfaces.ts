export interface IProduct {
  title: string;
  description: string;
  purchasePrice: string;
  сurrencyСourse: string;
  currencyType: string;
  amount: string;
  salePrice: string;
  category: string;
  photos: any[];
}

export interface IPhoto {
    name: string,
    size: number,
    src: string | undefined,
    type: string
}