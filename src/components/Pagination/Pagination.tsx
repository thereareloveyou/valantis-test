import { useDispatch, useSelector } from "react-redux";
import { AppDispath, RootState } from "../../store/store";
import { paginationActions } from "../../store/slices/paginationSlice";
import { Pagination } from "@mui/material";

export const PaginationBlock = () => {
  const dispatch = useDispatch<AppDispath>();

  const { amountPages } = useSelector((s: RootState) => s.pagination);

  const handleChangePagination = (e: React.ChangeEvent<unknown>, value: number) => {
    e.preventDefault();
    dispatch(paginationActions.setCurrentPage(value));
  };

  return <Pagination count={amountPages} siblingCount={0} onChange={handleChangePagination} />;
};
