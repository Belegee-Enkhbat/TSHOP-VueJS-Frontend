import { useState, useEffect } from "react";
import { Card, Button } from "antd";
import QuantityBtn from "./QuantityBtn";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartData } from "../redux/CartSlice";
import { HeartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const Cards = ({ item }: any) => {
  const [count, setCount] = useState(0);
  const [rowId, setRowId] = useState(0);
  const price = item.Price * count;
  const cartItems = {
    Product: item.id,
    CartPrice: count === 0 ? item.Price : price,
    CartQuantity: count === 0 ? 1 : count,
    PaymentStatus: false,
  };
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.CartSlice.cartData);
  const url = useSelector((state: any) => state.CartSlice.Url);
  useEffect(() => {
    dispatch<any>(fetchCartData());
  }, []);

  const handlePost = () => {
    if (cart.some((cartItem: any) => cartItem.Product.id === item.id)) {
      window.alert("Item already in Cart");
    } else {
      axios.post(`${url}/cart/`, cartItems).then((res: any) => {
        console.log(res.data);
        dispatch<any>(fetchCartData());
      });
    }
  };

  const handleClick = () => {
    handlePost();
  };
  const navigate = useNavigate();
  const handleBuy = () => {
    navigate("/checkout");
    handlePost();
  };
  return (
    <>
      <Card
        hoverable
        style={{ width: 240, border: "1px solid black" }}
        cover={
          <img
            alt="example"
            src={item.ImageURL}
            style={{
              position: "relative",
              left: "2.5rem",
              top: "0.5rem",
              border: "5px solid white",
              width: "10rem",
              height: "10rem",
            }}
          />
        }
      >
        <Meta
          title={item.ProductName}
          description={`Price: ${count ? price : item.Price}`}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "1.3rem" }}
            >
              <QuantityBtn
                setRowId={setRowId}
                id={0}
                counts={0}
                count={count}
                setCount={setCount}
                params={{}}
              />
              <HeartOutlined style={{ scale: "1.4", color: "black" }} />
            </div>
            <div
              style={{ display: "flex", gap: "1rem", marginLeft: "-0.5rem" }}
            >
              <Button
                style={{ marginTop: "0rem" }}
                type="primary"
                onClick={handleClick}
              >
                Add to Cart
              </Button>
              <Button style={{ marginTop: "0rem" }} onClick={handleBuy}>
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Cards;
