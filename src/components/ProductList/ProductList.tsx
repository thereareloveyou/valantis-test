import { useDispatch, useSelector } from "react-redux";
import { AppDispath, RootState } from "../../store/store";
import { ProductItem } from "../ProductItem/Product";
import { AxiosError } from "axios";
import { useEffect } from "react";
import { getIds, getProducts } from "../../helpers/API/api";
import { productActions } from "../../store/slices/productSlice";
import { filterUniqItems } from "../../Utils/uniqIDS";
import { paginationActions } from "../../store/slices/paginationSlice";
import { API } from "../../helpers/Shared/ApiValues";
import { statusActions } from "../../store/slices/statusSlice";
import { Grid } from "@mui/material";

export const ProductList = () => {
  const dispatch = useDispatch<AppDispath>();

  const { idsList, productsList } = useSelector((s: RootState) => s.products);
  const { page } = useSelector((s: RootState) => s.pagination);
  const { isLoading } = useSelector((s: RootState) => s.status);

  useEffect(() => {
    const getIDS = async () => {
      try {
        const data = await getIds();
        if (data !== undefined) {
          dispatch(productActions.setIdsList(data));
          dispatch(paginationActions.setAmountPages(Math.ceil(data.length / 50)));
        }
      } catch (e) {
        if (e instanceof AxiosError) {
          throw new Error(e.response?.data.message);
        }
      }
    };
    getIDS();
  }, []);

  useEffect(() => {
    if (!idsList || !idsList.length) {
      return;
    }
    const getProductItems = async () => {
      try {
        dispatch(statusActions.setIsLoading(true));
        const data = await getProducts(
          idsList.slice(page * API.PAGINATION.LIMIT - API.PAGINATION.LIMIT, page * API.PAGINATION.LIMIT)
        );
        data !== undefined ? dispatch(productActions.setProducts(filterUniqItems(data))) : data;
      } catch (e) {
        if (e instanceof AxiosError) {
          throw new Error(e.response?.data.message);
        }
      } finally {
        dispatch(statusActions.setIsLoading(false));
      }
    };
    getProductItems();
  }, [idsList, page]);

  if (isLoading) return;

  return (
    <Grid container spacing={3}>
      {productsList.length == 0 && <div>По вашему запросу ничего не найдено</div>}
      {productsList.map((item) => (
        <Grid item xs={12} md={6} xl={4}>
          <ProductItem
            key={item.id}
            id={item.id}
            price={item.price}
            brand={item.brand}
            product={item.product}
          />
        </Grid>
      ))}
    </Grid>
  );
};
