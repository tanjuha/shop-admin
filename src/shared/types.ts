export interface Product {
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

export interface Photo {
    name: string,
    size: number,
    src: string | undefined,
    type: string
}

export const InitialValueProductForm = {
  photos: [],
  title: "",
  description: "",
  purchasePrice: "",
  сurrencyСourse: "",
  currencyType: "dollar",
  amount: "",
  salePrice: "",
  category: "",
}