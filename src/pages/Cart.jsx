import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Cart({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <section className="cart-page">
        <div className="cart-header">
          <h1>Your Shopping Cart 🛒</h1>
          <p>
            Review your selected products and
            proceed to checkout securely.
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <h2>😔 Your Cart Is Empty</h2>

            <p>
              Start exploring our premium
              collection and add your favorite
              products.
            </p>

            <Link to="/products">
              <button className="shop-now-btn">
                Shop Now →
              </button>
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {cart.map((item) => (
                <div
                  className="cart-card"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-image"
                  />

                  <div className="cart-info">
                    <h3>{item.name}</h3>

                    <p className="price">
                      ₹{item.price}
                    </p>

                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          decreaseQuantity(
                            item.id
                          )
                        }
                      >
                        −
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(
                            item.id
                          )
                        }
                      >
                        +
                      </button>
                    </div>

                    <h4>
                      Subtotal ₹
                      {item.price *
                        item.quantity}
                    </h4>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Items</span>
                <span>{cart.length}</span>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="summary-row total">
                <span>Total</span>
                <span>₹{total}</span>
              </div>

              <Link to="/checkout">
                <button className="checkout-btn">
                  Proceed To Checkout →
                </button>
              </Link>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Cart;