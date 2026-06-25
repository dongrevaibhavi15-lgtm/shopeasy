import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/wishlist";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  // =========================
  // DARK MODE
  // =========================

  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode =
      localStorage.getItem("darkMode");

    return savedDarkMode
      ? JSON.parse(savedDarkMode)
      : false;
  });

  useEffect(() => {
    localStorage.setItem(
      "darkMode",
      JSON.stringify(darkMode)
    );
  }, [darkMode]);

  // =========================
  // CART
  // =========================

  const [cart, setCart] = useState(() => {
    const savedCart =
      localStorage.getItem("cart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  // =========================
  // WISHLIST
  // =========================

  const [wishlist, setWishlist] =
    useState(() => {
      const savedWishlist =
        localStorage.getItem(
          "wishlist"
        );

      return savedWishlist
        ? JSON.parse(savedWishlist)
        : [];
    });

  useEffect(() => {
    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  // =========================
  // ADD TO CART
  // =========================

  const addToCart = (product) => {
    const existingItem =
      cart.find(
        (item) =>
          item.id === product.id
      );

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  // =========================
  // REMOVE CART ITEM
  // =========================

  const removeFromCart = (id) => {
    setCart(
      cart.filter(
        (item) => item.id !== id
      )
    );
  };

  // =========================
  // INCREASE QUANTITY
  // =========================

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );
  };

  // =========================
  // DECREASE QUANTITY
  // =========================

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) =>
            item.quantity > 0
        )
    );
  };

  // =========================
  // WISHLIST FUNCTIONS
  // =========================

  const addToWishlist = (
    product
  ) => {
    const exists =
      wishlist.find(
        (item) =>
          item.id === product.id
      );

    if (!exists) {
      setWishlist([
        ...wishlist,
        product,
      ]);
    }
  };

  const removeFromWishlist = (
    id
  ) => {
    setWishlist(
      wishlist.filter(
        (item) => item.id !== id
      )
    );
  };

  return (
    <div
      className={
        darkMode
          ? "app dark-mode"
          : "app"
      }
    >
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cartCount={cart.length}
              wishlistCount={
                wishlist.length
              }
              darkMode={darkMode}
              setDarkMode={
                setDarkMode
              }
            />
          }
        />

        <Route
          path="/products"
          element={
            <Products
              addToCart={addToCart}
              addToWishlist={
                addToWishlist
              }
              cartCount={
                cart.length
              }
              wishlistCount={
                wishlist.length
              }
              darkMode={darkMode}
              setDarkMode={
                setDarkMode
              }
            />
          }
        />

        <Route
          path="/products/:id"
          element={
            <ProductDetails
              addToCart={addToCart}
              addToWishlist={
                addToWishlist
              }
              cartCount={
                cart.length
              }
              wishlistCount={
                wishlist.length
              }
              darkMode={darkMode}
              setDarkMode={
                setDarkMode
              }
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={
                removeFromCart
              }
              increaseQuantity={
                increaseQuantity
              }
              decreaseQuantity={
                decreaseQuantity
              }
            />
          }
        />

        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlist={wishlist}
              removeFromWishlist={
                removeFromWishlist
              }
            />
          }
        />

        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
            />
          }
        />

        <Route
          path="/order-success"
          element={
            <OrderSuccess />
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />
      </Routes>
    </div>
  );
}

export default App;
