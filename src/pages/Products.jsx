import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import products from "../Data/products";
import "./Products.css";

function Products({
  addToCart,
  addToWishlist,
  cartCount,
  wishlistCount,
  darkMode,
  setDarkMode,
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");


  let filteredProducts = [...products];

  filteredProducts = filteredProducts.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());


    const matchesCategory =
      category === "All"
        ? true
        : product.category === category;

    return matchesSearch && matchesCategory;
  });

  if (sort === "low-high") {
    filteredProducts.sort(
      (a, b) => a.price - b.price
    );
  }

  if (sort === "high-low") {
    filteredProducts.sort(
      (a, b) => b.price - a.price
    );
  }

  return (
    <>
      <Navbar
        cartCount={cartCount}
        wishlistCount={wishlistCount}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <section className="products-page">
        <div className="products-header">
          <h1 className="products-title">
            Discover Amazing Products 🛍️
          </h1>

          <p className="products-subtitle">
            Find the latest trends, gadgets and premium products.
          </p>
        </div>

        <div className="filters">
          <input
            type="text"
            placeholder="🔍 Search products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
          >
            <option value="All">
              All Categories
            </option>

            <option value="Watch">
              Watches
            </option>

            <option value="Shoes">
              Shoes
            </option>

            <option value="Headphones">
              Headphones
            </option>

            <option value="Laptop">
              Laptops
            </option>
          </select>

          <select
            value={sort}
            onChange={(e) =>
              setSort(e.target.value)
            }
          >
            <option value="">
              Sort By
            </option>

            <option value="low-high">
              Price: Low → High
            </option>

            <option value="high-low">
              Price: High → Low
            </option>
          </select>
        </div>

        <div className="results-count">
          {filteredProducts.length} Products Found
        </div>

        <div className="products">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
                addToWishlist={addToWishlist}
              />
            ))
          ) : (
            <div className="no-products">
              <h2>😔 No Products Found</h2>
              <p>
                Try another search or category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Products;

