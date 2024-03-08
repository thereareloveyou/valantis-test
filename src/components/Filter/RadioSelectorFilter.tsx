import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { API } from "../../helpers/Shared/ApiValues";
import { useDispatch, useSelector } from "react-redux";
import { AppDispath, RootState } from "../../store/store";
import { filterActions } from "../../store/slices/filterSlice";
import { ChangeEvent } from "react";

export const RadioSelectorFilter = () => {
  const { filterType } = useSelector((s: RootState) => s.filter);
  const dispatch = useDispatch<AppDispath>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(filterActions.setFilterType(e.target.value));
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Фильтровать товары по:</FormLabel>
      <RadioGroup className="flex justify-center"
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={filterType}
        onChange={handleChange}
      >
        <FormControlLabel value={API.FILTER_TYPES.NAME} control={<Radio />} label="Наименование" />
        <FormControlLabel value={API.FILTER_TYPES.PRICE} control={<Radio />} label="Цена" />
        <FormControlLabel value={API.FILTER_TYPES.BRAND} control={<Radio />} label="Бренд" />
      </RadioGroup>
    </FormControl>
  );
};
