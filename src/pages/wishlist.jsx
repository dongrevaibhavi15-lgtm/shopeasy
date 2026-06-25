import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Wishlist({
  wishlist,
  removeFromWishlist,
  cartCount,
  wishlistCount,
  darkMode,
  setDarkMode,
}) {
  return (
    <>
      <Navbar
        cartCount={cartCount}
        wishlistCount={wishlistCount}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <section className="wishlist-page">

        <h1 className="wishlist-title">
          ❤️ My Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <div className="empty-wishlist">

            <h2>
              Your Wishlist Is Empty 😔
            </h2>

            <p>
              Save products you love and
              come back later.
            </p>

            <Link to="/products">
              <button className="shop-btn">
                Browse Products
              </button>
            </Link>

          </div>
        ) : (
          <div className="wishlist-grid">

            {wishlist.map((item) => (
              <div
                className="wishlist-card"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <h3>{item.name}</h3>

                <div className="wishlist-rating">
                  ⭐ {item.rating}
                </div>

                <p className="wishlist-price">
                  ₹{item.price}
                </p>

                <button
                  className="remove-wishlist-btn"
                  onClick={() =>
                    removeFromWishlist(
                      item.id
                    )
                  }
                >
                  Remove ❤️
                </button>

              </div>
            ))}

          </div>
        )}

      </section>
    </>
  );
}

export default Wishlist;