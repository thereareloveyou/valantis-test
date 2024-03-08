export interface IProduct {
  id: string;
  product: string;
  price: number;
  brand: string | null;
}

export interface IProductsState {
  idsList: string[];
  productsList: IProduct[];
}

export interface IPaginationState {
  page: number;
  amountPages: number;
}

export interface IFilterState {
  filterType: string;
}

export interface IFiltersTypes {
  filterType?: string | number;
}

export interface IStatusState {
  isLoading: boolean;
  isErrorIDS: boolean;
  isErrorItems: boolean
}

export interface IResponceIDS {
  result: string[];
}

export interface IResponceProducts {
  result: IProduct[];
}
