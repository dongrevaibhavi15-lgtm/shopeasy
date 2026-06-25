import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import heroImage from "../assets/hero.jpg";
import products from "../Data/products";
import "./Home.css";

function Home({
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

      {/* Hero Section */}

<section className="hero">

  <div className="hero-content">


<span className="hero-badge">
  🔥 Limited Time Offer
</span>

<h1>
  Upgrade Your Lifestyle
  <span className="highlight">
    {" "}With Premium Products
  </span>
</h1>

<p>
  Shop the latest fashion, gadgets,
  accessories and lifestyle products
  at unbeatable prices.
</p>

<div className="hero-buttons">

  <Link to="/products">
    <button className="shop-btn">
      Shop Collection →
    </button>
  </Link>

  <Link to="/wishlist">
    <button className="explore-btn">
      Explore Wishlist ❤️
    </button>
  </Link>

</div>


  </div>

  <div className="hero-image">
    <img
      src={heroImage}
      alt="ShopEasy Hero"
    />
  </div>

</section>


      {/* Stats Section */}
      <section className="stats">

        <div className="stat-card">
          <h2>5000+</h2>
          <p>Products</p>
        </div>

        <div className="stat-card">
          <h2>10000+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat-card">
          <h2>24/7</h2>
          <p>Support</p>
        </div>

        <div className="stat-card">
          <h2>99%</h2>
          <p>Satisfaction</p>
        </div>

      </section>

      {/* Categories */}
      <section className="categories">

        <h2>Shop By Category</h2>

        <div className="category-container">

          <div className="category-card">
            👟 Shoes
          </div>

          <div className="category-card">
            ⌚ Watches
          </div>

          <div className="category-card">
            🎧 Headphones
          </div>

          <div className="category-card">
            💻 Laptops
          </div>

        </div>

      </section>

      {/* Sale Banner */}
      <section className="sale-banner">
        <h2>
          🔥 Mega Sale - Up To 50% OFF
        </h2>

        <p>
          Limited Time Offer. Grab Your
          Favourite Products Today!
        </p>
      </section>

      {/* Featured Products */}
      <section className="featured-products">

        <h2>
          Featured Products ⭐
        </h2>

        <div className="featured-container">

          {products
            .slice(0, 4)
            .map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="featured-link"
              >
                <div className="featured-card">

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <h3>
                    {product.name}
                  </h3>

                  <p>
                    ₹{product.price}
                  </p>

                  <button>
                    View Details
                  </button>

                </div>
              </Link>
            ))}

        </div>
{/* Trending Products */}
<section className="trending-section">

  <h2>🔥 Trending Now</h2>

  <div className="trending-grid">

    <div className="trend-card">
      <span>🔥 Hot</span>
      <h3>Premium Sneakers</h3>
      <p>Starting ₹2999</p>
    </div>

    <div className="trend-card">
      <span>⚡ New</span>
      <h3>Smart Watches</h3>
      <p>Starting ₹1999</p>
    </div>

    <div className="trend-card">
      <span>🎧 Best Seller</span>
      <h3>Wireless Audio</h3>
      <p>Starting ₹1499</p>
    </div>

  </div>

</section>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">

        <h2>
          Why Choose ShopEasy?
        </h2>

        <div className="why-container">

          <div className="why-card">
            🚚
            <h3>Fast Delivery</h3>
            <p>
              Quick and safe shipping.
            </p>
          </div>

          <div className="why-card">
            🔒
            <h3>Secure Payment</h3>
            <p>
              100% secure transactions.
            </p>
          </div>

          <div className="why-card">
            🎁
            <h3>Best Offers</h3>
            <p>
              Exclusive discounts daily.
            </p>
          </div>

        </div>
        {/* Testimonials */}
<section className="testimonials">

  <h2>What Customers Say ❤️</h2>

  <div className="testimonial-container">

    <div className="testimonial-card">
      <p>
        "Amazing quality and super fast delivery!"
      </p>

      <h4>⭐⭐⭐⭐⭐</h4>

      <span>Priya S.</span>
    </div>

    <div className="testimonial-card">
      <p>
        "Best ecommerce experience I've had."
      </p>

      <h4>⭐⭐⭐⭐⭐</h4>

      <span>Rahul K.</span>
    </div>

    <div className="testimonial-card">
      <p>
        "Premium products at affordable prices."
      </p>

      <h4>⭐⭐⭐⭐⭐</h4>

      <span>Anjali M.</span>
    </div>

  </div>

</section>

      </section>

      {/* Footer */}
      <footer className="footer">

        <h3>ShopEasy 🛒</h3>

        <p>
          Your One Stop Online Shopping
          Destination
        </p>

        <div className="footer-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/products">
            Products
          </Link>

          <Link to="/cart">
            Cart
          </Link>

          <Link to="/wishlist">
            Wishlist
          </Link>

        </div>

        <p className="copyright">
          © 2026 ShopEasy. All Rights Reserved.
        </p>

      </footer>
    </>
  );
}

export default Home;
