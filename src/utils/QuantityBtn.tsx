import { useEffect } from "react";
import { Button, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, fetchCartData } from "../redux/CartSlice";
import axios from "axios";

const QuantityBtn = ({
  count,
  setCount,

  id,
  setRowId,
  params,
}: any) => {
  const dispatch = useDispatch();
  const counter = useSelector(
    (state: any) => state.CartSlice.countValue.countValue
  );
  const url = useSelector((state: any) => state.CartSlice.Url);
  const updateData = () => {
    if (params) {
      return {
        id: params.id,
        Product: params.Product.id,
        CartPrice: params.Product.Price * (count + 1),
        CartQuantity: count + 1,
      };
    }
  };
  const updateCart = () => {
    axios
      .put(`${url}/cart/${params.id}/update`, updateData())
      .then((res: any) => {
        dispatch<any>(fetchCartData());
      });
  };
  const handleIncrement = () => {
    setCount(count + 1);
    setRowId(id ? id : 0);
    updateCart();
  };

  const handleDecrement = () => {
    if (count !== 0) {
      setCount(count - 1);
      setRowId(id ? id : 0);
      updateCart();
    } else {
      setCount(0);
    }
  };

  useEffect(() => {
    dispatch(
      increaseCounter({
        countValue: count,
      })
    );
  }, [count, dispatch]);

  return (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <div
        style={{
          display: "flex",
          marginTop: "1rem",
          border: "1px solid black",
          borderRadius: "5px",
          width: "7rem",
          height: "2rem",
        }}
      >
        <Button
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px 0 0 5px",
            marginRight: "-1px",
            borderRight: "none",
            background: "none",
          }}
          onClick={handleDecrement}
        >
          -
        </Button>
        <Input
          name="count"
          value={count}
          min={0}
          max={10}
          onChange={(e) => setCount(e.target.value)}
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "0px",
            textAlign: "center",
            borderLeft: "none",
            borderRight: "none",
            outline: "none",
            background: "none",
          }}
        />

        <Button
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "0 5px 5px 0",
            marginLeft: "-1px",
            borderLeft: "none",
            background: "none",
          }}
          onClick={handleIncrement}
        >
          +
        </Button>
      </div>
      <h4 style={{ paddingTop: "0.6rem" }}>Kgs</h4>
    </div>
  );
};

export default QuantityBtn;
