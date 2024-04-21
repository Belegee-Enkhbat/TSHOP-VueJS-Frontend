import { Box, Grid } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartData } from "../redux/CartSlice";
import YourOrdersTable from "../components/YourOrdersTable";
type Props = {};

const YourOrders = (props: Props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.CartSlice.cartData);

  React.useEffect(() => {
    dispatch<any>(fetchCartData());
  }, [dispatch]);
  return (
    <>
      <Box>
        <div style={{ margin: "3rem 1rem 1rem 40%", fontSize: "1.5rem" }}>
          <h1>Your Orders</h1>
        </div>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "3rem",
          }}
        >
          <YourOrdersTable cart={cart} />
        </Grid>
      </Box>
    </>
  );
};

export default YourOrders;
