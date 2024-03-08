import { IProduct } from "../helpers/types";

export const filterUniqItems = (list: IProduct[]) => {
  return [...new Map(list.map((item) => [item.id, item])).values()];
};


