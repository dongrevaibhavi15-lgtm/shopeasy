import { Link } from "react-router-dom";

function ProductCard({
  product,
  addToCart,
  addToWishlist,
}) {
  return (
  <div className="product-card">
    <span className="discount-badge">
      20% OFF
    </span>

    <img
      src={product.image}
      alt={product.name}
      className="product-img"
    />

    <h3>{product.name}</h3>

    <div className="rating">
      ⭐⭐⭐⭐⭐
    </div>

    <p className="product-price">
      ₹{product.price}
    </p>

    <div className="product-buttons">
      <button
        className="cart-btn"
        onClick={() =>
          addToCart(product)
        }
      >
        Add To Cart
      </button>

      <button
        className="wish-btn"
        onClick={() =>
          addToWishlist(product)
        }
      >
        ❤️
      </button>
    </div>

    <Link
      to={`/products/${product.id}`}
    >
      <button className="details-btn">
        View Details
      </button>
    </Link>
  </div>
);
}

export default ProductCard;