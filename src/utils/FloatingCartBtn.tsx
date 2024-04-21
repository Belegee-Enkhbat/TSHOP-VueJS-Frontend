import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartData } from "../redux/CartSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const FloatingCartBtn = (props: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/checkout");
  };

  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.CartSlice.cartData);
  // console.log("cart", cart);

  useEffect(() => {
    dispatch<any>(fetchCartData());
  }, []);

  return (
    <>
      {cart.length !== 0 ? (
        <Box
          sx={{
            "& > :not(style)": { m: 1 },
            position: "sticky",
            float: "right",
            bottom: "2rem",
            right: "1rem",
          }}
        >
          <Fab color="primary" onClick={handleClick}>
            <ShoppingCartOutlined style={{ scale: "1.2" }} />
          </Fab>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default FloatingCartBtn;
