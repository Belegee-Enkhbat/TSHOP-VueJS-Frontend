import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import Swal from "sweetalert2";
type Props = {};

const Payment = (total: any, handleConfirm: any) => {
  const navigate = useNavigate();
  const onToken = (token: any) => {
    if (token) {
      Swal.fire("Congratulations", "Your Order Placed Successfully", "success");
    } else {
      Swal.fire("Oops", "Something Went Wrong", "error");
    }
    console.log(token);
    navigate("/");
  };
  return (
    <>
      <StripeCheckout
        amount={total * 100}
        currency="INR"
        token={onToken}
        stripeKey="pk_test_51MOKrBSHibQzk1pAthy8jVcwkmmkfyumwvDDqDvzniShMZ5mUDxzWBLjTaOa1Ng0vInbh6SIvGFzRKRLhWGjD0qh003l10aVTb"
      />
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
    </>
  );
};

export default Payment;
