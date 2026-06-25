import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import products from "../Data/products";
import "./ProductDetails.css";

function ProductDetails({
addToCart,
addToWishlist,
cartCount,
wishlistCount,
darkMode,
setDarkMode,
}) {
const { id } = useParams();

const product = products.find(
(item) => item.id === Number(id)
);

if (!product) {
return (
<> <Navbar
       cartCount={cartCount}
       wishlistCount={wishlistCount}
       darkMode={darkMode}
       setDarkMode={setDarkMode}
     />


    <div className="not-found">
      <h1>😔 Product Not Found</h1>
    </div>
  </>
);


}

return (
<> <Navbar
     cartCount={cartCount}
     wishlistCount={wishlistCount}
     darkMode={darkMode}
     setDarkMode={setDarkMode}
   />


  {/* PRODUCT DETAILS */}

  <section className="product-details">

    <div className="details-image">

      <span className="details-badge">
        🔥 BEST SELLER
      </span>

      <img
        src={product.image}
        alt={product.name}
      />

    </div>

    <div className="details-content">

      <p className="product-brand">
        ShopEasy Premium
      </p>

      <h1>{product.name}</h1>

      <div className="details-rating">
        ⭐ {product.rating}/5
        <span>
          (1,240 Reviews)
        </span>
      </div>

      <div className="price-section">

        <h2>
          ₹{product.price}
        </h2>

        <span className="old-price">
          ₹{product.price + 3000}
        </span>

        <span className="discount">
          40% OFF
        </span>

      </div>

      <p className="product-description">
        {product.description}
      </p>

      <div className="stock-status">
        ✅ In Stock
      </div>

      <div className="details-buttons">

        <button
          className="buy-btn"
          onClick={() =>
            addToCart(product)
          }
        >
          🛒 Add To Cart
        </button>

        <button
          className="wish-detail-btn"
          onClick={() =>
            addToWishlist(product)
          }
        >
          ❤️ Wishlist
        </button>

      </div>

      <div className="product-features">

        <div className="feature">
          🚚 Free Delivery
        </div>

        <div className="feature">
          🔒 Secure Payment
        </div>

        <div className="feature">
          ↩️ Easy Returns
        </div>

        <div className="feature">
          ⚡ Fast Shipping
        </div>

      </div>

    </div>

  </section>

  {/* PRODUCT INFO */}

  <section className="product-extra">

    <div className="extra-card">
      <h3>Product Highlights</h3>

      <ul>
        <li>Premium Quality Materials</li>
        <li>Modern Stylish Design</li>
        <li>Trusted By Thousands</li>
        <li>1 Year Warranty</li>
      </ul>
    </div>

    <div className="extra-card">
      <h3>Why Customers Love It ❤️</h3>

      <p>
        This product combines premium
        quality, durability and style,
        making it one of the most
        popular items on ShopEasy.
      </p>
    </div>

  </section>

  {/* RELATED PRODUCTS */}

  <section className="related-products">

    <h2>
      Similar Products
    </h2>

    <div className="related-grid">

      {products
        .filter(
          (item) =>
            item.id !== product.id
        )
        .slice(0, 4)
        .map((item) => (
          <div
            className="related-card"
            key={item.id}
          >

            <img
              src={item.image}
              alt={item.name}
            />

            <h3>
              {item.name}
            </h3>

            <p>
              ₹{item.price}
            </p>

            <button>
              View Product
            </button>

          </div>
        ))}

    </div>

  </section>

</>


);
}

export default ProductDetails;
