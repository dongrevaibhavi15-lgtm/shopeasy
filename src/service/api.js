import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Get all products
export const getProducts = () => API.get("/products");

// Get single product
export const getProduct = (id) =>
  API.get(`/products/${id}`);

// Login user
export const loginUser = (userData) =>
  API.post("/auth/login", userData);

// Register user
export const registerUser = (userData) =>
  API.post("/auth/register", userData);

// Add item to cart
export const addToCart = (cartData) =>
  API.post("/cart", cartData);

// Get cart items
export const getCartItems = () =>
  API.get("/cart");

// Delete cart item
export const deleteCartItem = (id) =>
  API.delete(`/cart/${id}`);

export default API;