import React from "react";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import CartTable from "../components/CartTable";
import OrderSummary from "../components/OrderSummary";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartData } from "../redux/CartSlice";

const CheckOut = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state: any) => state.CartSlice.cartData);
  // console.log("qqqq", cart);

  React.useEffect(() => {
    dispatch<any>(fetchCartData());
  }, [dispatch]);

  return (
    <>
      <Box>
        <div style={{ margin: "3rem 1rem 1rem 40%", fontSize: "1.5rem" }}>
          <h1>Your Cart</h1>
        </div>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "3rem",
          }}
        >
          <CartTable cart={cart} />
          <OrderSummary cart={cart} />
        </Grid>
      </Box>
    </>
  );
};

export default CheckOut;
