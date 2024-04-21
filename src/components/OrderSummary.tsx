import { Button, Divider, Input } from "antd";
import { useState, useEffect } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CheckOutDialog from "./CheckOutDialog";

const OrderSummary = ({ cart }: any) => {
  const [open, setOpen] = useState(false);
  const [promo, setPromo] = useState("");
  const subTotal = cart.reduce(
    (accumulator: any, currentItem: any) => accumulator + currentItem.CartPrice,
    0
  );
  const [shippingFee, setShippingFee] = useState(subTotal === 0 ? 0 : 50);
  const total = subTotal + shippingFee;
  useEffect(() => {
    setShippingFee(subTotal === 0 ? 0 : 50);
  }, [cart]);
  const handleClickOpen = () => {
    if (total === 0) {
      window.alert("Cart is empty");
    } else {
      setOpen(true);
    }
  };

  const handleChange = (e: any) => {
    setPromo(e.target.value);
    // if (promo) {
    //   total -= 20;
    // }
  };
  return (
    <div
      style={{
        width: "20rem",
        backgroundColor: "#faf7f0",
        color: "#656565",
        display: "flex",
        flexDirection: "column",
        margin: "0rem 1rem",
      }}
    >
      <div
        style={{
          margin: "1rem 1rem 0 1rem",
        }}
      >
        <h2 style={{ margin: 0 }}>Order Summary</h2>
        <Divider />
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingRight: "2rem",
            }}
          >
            <h4 style={{ margin: "0 2rem 0 0" }}>Promocode: </h4>
            <Input onChange={handleChange} />
          </div>
          <Divider />
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingRight: "2rem",
            }}
          >
            <h4 style={{ margin: 0 }}>Subtotal: </h4>
            <h4 style={{ margin: 0, display: "flex", alignItems: "center" }}>
              <CurrencyRupeeIcon style={{ fontSize: "10px" }} />
              {subTotal}
            </h4>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingRight: "2rem",
              alignItems: "center",
            }}
          >
            <h4>Shipping:</h4>

            <h4 style={{ margin: 0, display: "flex", alignItems: "center" }}>
              <CurrencyRupeeIcon style={{ fontSize: "10px" }} />
              {shippingFee}
            </h4>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#f8eac970",
          padding: "0rem 3rem 0 1rem",
        }}
      >
        <h2>Total</h2>

        <h2 style={{ margin: 0, display: "flex", alignItems: "center" }}>
          <CurrencyRupeeIcon style={{ fontSize: "10px" }} />
          {total}
        </h2>
      </div>

      <Button
        style={{
          height: "3rem",
          backgroundColor: "#BCCEF8",
          color: "white",
          fontSize: "1.5rem",
          borderRadius: 0,
        }}
        onClick={handleClickOpen}
      >
        CheckOut
      </Button>
      <CheckOutDialog open={open} setOpen={setOpen} total={total} />
    </div>
  );
};

export default OrderSummary;
