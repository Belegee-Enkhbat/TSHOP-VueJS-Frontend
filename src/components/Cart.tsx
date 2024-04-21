import { useEffect } from "react";
import Button from "@mui/material/Button";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartData } from "../redux/CartSlice";

const Cart = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/checkout");
  };
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.CartSlice.cartData);

  useEffect(() => {
    dispatch<any>(fetchCartData());
  }, []);

  return (
    <>
      <Button
        sx={{
          minWidth: "10px",
        }}
        onClick={handleClick}
      >
        {cart.length !== 0 ? (
          <div
            style={{
              position: "absolute",
              background: "blue",
              borderRadius: "80%",
              top: "-0.4rem",
              left: "1.2rem",
              height: "1rem",
              width: "1rem",
              zIndex: "3",
            }}
          >
            <p
              style={{
                fontSize: ".8rem",
                marginTop: "-0.35rem",
                color: "white",
                padding: "0.2rem",
              }}
            >
              {cart.length}
            </p>
          </div>
        ) : (
          <></>
        )}
        <ShoppingCartOutlined style={{ scale: "1.4", color: "black" }} />
      </Button>
    </>
  );
};

export default Cart;
