import { useDispatch, useSelector } from "react-redux";
import { getFilteredItems } from "../../helpers/API/api";
import { RadioSelectorFilter } from "./RadioSelectorFilter";
import { AppDispath, RootState } from "../../store/store";
import { productActions } from "../../store/slices/productSlice";
import { paginationActions } from "../../store/slices/paginationSlice";
import { API } from "../../helpers/Shared/ApiValues";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

export const Filter = () => {
  const [filterValue, setFilterValue] = useState<string>("");

  const { filterType } = useSelector((s: RootState) => s.filter);
  const dispatch = useDispatch<AppDispath>();

  const getFilterItems = async () => {
    try {
      const data = await getFilteredItems({
        [filterType]: filterType === "price" ? +filterValue : filterValue,
      });

      if (data == undefined || !data.length) {
        dispatch(productActions.setIdsList([]));
        dispatch(productActions.setProducts([]));
        dispatch(paginationActions.setAmountPages(1));
        dispatch(paginationActions.setCurrentPage(API.PAGINATION.OFSSET));
      } else {
        dispatch(productActions.setIdsList(data));
        dispatch(paginationActions.setAmountPages(Math.ceil(data.length / 50)));
        dispatch(paginationActions.setCurrentPage(API.PAGINATION.OFSSET));
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <RadioSelectorFilter />
      <TextField
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
        label="Введите значение"
        sx={{ mb: "10px", mt: "10px" }}
        fullWidth
      />
      <Button onClick={getFilterItems}>Применить фильтр</Button>
    </>
  );
};
