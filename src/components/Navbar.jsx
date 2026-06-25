import { Link } from "react-router-dom";

function Navbar({
cartCount = 0,
wishlistCount = 0,
}) {
return ( <nav className="navbar">


  <Link to="/" className="logo">
    ShopEasy
  </Link>

  <div className="search-container">
    <input
      type="text"
      placeholder="Search premium products..."
      className="search-bar"
    />
    <button className="search-btn">
      🔍
    </button>
  </div>

  <div className="nav-links">

    <Link to="/">
      Home
    </Link>

    <Link to="/products">
      Products
    </Link>

    <Link
      to="/wishlist"
      className="nav-icon"
    >
      ❤️
      <span className="badge">
        {wishlistCount}
      </span>
    </Link>

    <Link
      to="/cart"
      className="nav-icon"
    >
      🛒
      <span className="badge">
        {cartCount}
      </span>
    </Link>

    <Link to="/login">
      Login
    </Link>

  </div>

</nav>


);
}

export default Navbar;

