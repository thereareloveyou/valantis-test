import { Paper, Typography } from "@mui/material";
import { IProduct } from "../../helpers/types";

export const ProductItem = ({ id, product, price, brand }: IProduct) => {
  return (
    <Paper elevation={1}>
      <Typography variant="h6">{product}</Typography>
      <Typography variant="body2" margin={2}>
        ID: {id}
      </Typography>
      <Typography variant="body2" margin={2}>{`Бренд: ${brand == null ? "Неизвестно" : brand}`}</Typography>
      <Typography variant="body2" margin={2}>
        Цена: {price}
      </Typography>
    </Paper>
  );
};
