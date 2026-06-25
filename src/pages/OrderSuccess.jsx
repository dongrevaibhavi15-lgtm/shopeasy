import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function OrderSuccess() {
  const orderNumber =
    Math.floor(
      100000 + Math.random() * 900000
    );

  return (
    <>
      <Navbar />

      <div className="success-container">

        <div className="success-card">

          <div className="success-icon">
            ✅
          </div>

          <h1>
            Order Placed Successfully!
          </h1>

          <p>
            Thank you for shopping
            with ShopEasy.
          </p>

          <h3>
            Order ID: #{orderNumber}
          </h3>

          <p>
            Your order will be
            delivered soon.
          </p>

          <Link to="/">
            <button className="home-btn">
              Continue Shopping
            </button>
          </Link>

        </div>

      </div>
    </>
  );
}

export default OrderSuccess;