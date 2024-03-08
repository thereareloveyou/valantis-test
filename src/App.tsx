import { CircularProgress } from "@mui/material";
import "./App.css";
import { Filter } from "./components/Filter/Filter";
import { PaginationBlock } from "./components/Pagination/Pagination";

import { ProductList } from "./components/ProductList/ProductList";
import { RootState } from "./store/store";
import { useSelector } from "react-redux";

export interface ApiResponse {
  result: string[];
}

function App() {
  const { isLoading } = useSelector((s: RootState) => s.status);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col min-w-[15rem]">
        <Filter />
        <PaginationBlock />
      </div>
      {isLoading && <CircularProgress />}
      <ProductList />
    </div>
  );
}

export default App;
