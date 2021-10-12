export interface Product {
  id: number | string,
  title: string;
  description: string;
  purchasePrice?: string;
  сurrencyСourse?: string;
  currencyType?: string;
  amount?: string;
  salePrice?: string;
  category?: string;
  photos?: any[];
}

export interface Photo {
    name: string,
    size: number,
    src: string | undefined,
    type: string
}

export const InitialValueProductForm = {
  id: null,
  photos: [],
  title: "",
  description: "description",
  purchasePrice: "34",
  сurrencyСourse: "23",
  currencyType: "dollar",
  amount: "43",
  salePrice: "23",
  category: "43",
}

export interface ProductState  {
  ids?: any,
  entities?: any,
  products?: [],
  status?: string,
  error?: any
}