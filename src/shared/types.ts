export interface Product {
  id: number | string;
  title: string;
  description: string;
  purchasePrice?: string;
  сurrencyСourse?: string;
  currencyType?: string;
  amount?: string;
  salePrice?: string;
  category?: string;
  image?: any;
}

export interface Photo {
  name: string;
  size: number;
  src: string | undefined;
  type: string;
}

export const InitialValueProductForm = {
  id: null,
  title: "",
  description: "description",
  purchasePrice: "34",
  currencyType: "dollar",
  salePrice: "23",
  category: "43",
  сurrencyСourse: "23",
  amount: "43",
  image: null,
};

export interface ProductState {
  ids?: any;
  entities?: any;
  products?: Product[];
  productDetails?: any;
  status?: any;
  error?: any;
  notification?: any;
}

export interface RootState {
  products?: any
}