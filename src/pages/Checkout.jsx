import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Checkout({ cart }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: "Cash On Delivery",
  });

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = () => {
    if (
      !formData.name ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.pincode
    ) {
      alert("Please fill all fields.");
      return;
    }

    navigate("/order-success");
  };

  return (
    <>
      <Navbar />

      <div className="checkout-container">
        <h1>Checkout 🛍️</h1>

        <div className="checkout-grid">
          <div className="checkout-form">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <textarea
              name="address"
              placeholder="Full Address"
              value={formData.address}
              onChange={handleChange}
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />

            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
            />

            <select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
            >
              <option>
                Cash On Delivery
              </option>

              <option>
                Credit Card
              </option>

              <option>
                Debit Card
              </option>

              <option>
                UPI
              </option>
            </select>

          </div>

          <div className="order-summary">
            <h2>Order Summary</h2>

            {cart.map((item) => (
              <div
                key={item.id}
                className="summary-item"
              >
                <span>
                  {item.name} × {item.quantity}
                </span>

                <span>
                  ₹
                  {item.price *
                    item.quantity}
                </span>
              </div>
            ))}

            <hr />

            <h2>Total: ₹{total}</h2>

            <button
              className="place-order-btn"
              onClick={handleOrder}
            >
              Place Order 🚀
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;