import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Divider, Button } from "antd";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import Payment from "./Payment";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CheckOutDialog({ open, setOpen, total }: any) {
  const [payment, setPayment] = React.useState(" ");
  const navigate = useNavigate();

  const handleClose = () => {
    if (window.confirm("Do you want to cancel this payment ?")) {
      setOpen(false);
    }
  };
  const handleConfirm = () => {
    if (window.confirm("Proceed to payment!")) {
      setOpen(true);
    }
  };
  const handleChange = (event: SelectChangeEvent) => {
    setPayment(event.target.value);
  };
  const options = [
    {
      value: 1,
      label: "UPI",
    },
    {
      value: 2,
      label: "Debit/Credit",
    },
    {
      value: 3,
      label: "Paypal",
    },
  ];
  console.log(payment);
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <h1 style={{ margin: 0, padding: "1.5rem 0 0 1.5rem" }}>CheckOut</h1>
        <Divider />
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingRight: "3rem",
                alignItems: "center",
                backgroundColor: "#f8eac970",
                padding: "0rem 1rem",
                width: "23rem",
              }}
            >
              <h2>Total</h2>

              <h2 style={{ margin: 0, display: "flex", alignItems: "center" }}>
                <CurrencyRupeeIcon style={{ fontSize: "10px" }} />
                {total}
              </h2>
            </div>
            <div style={{ display: "flex", gap: "2rem" }}>
              <Select
                value={payment}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                sx={{ width: "250px", color: "black" }}
                onChange={handleChange}
              >
                <MenuItem value=" ">
                  <em>Select Payment Mode</em>
                </MenuItem>
                <MenuItem value={1}>UPI</MenuItem>
                <MenuItem value={2}>Debit/Credit</MenuItem>
                <MenuItem value={3}>Paypal</MenuItem>
              </Select>
            </div>
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions sx={{ padding: "0 2rem 2rem 0" }}>
          <Button
            style={{
              height: "3rem",
              width: "7rem",
              border: "1px solid red",
              color: "red",
              fontSize: "1rem",
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          {payment === "2" ? (
            <Payment total={total} handleConfirm={handleConfirm} />
          ) : (
            <Button
              style={{
                height: "3rem",
                width: "7rem",
                border: "1px solid #BCCEF8",
                color: "blue",
                fontSize: "1rem",
                marginLeft: "1rem",
              }}
              onClick={handleConfirm}
            >
              Continue
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
