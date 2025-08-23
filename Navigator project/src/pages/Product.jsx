import React, { useEffect, useState } from "react";
import Navbar from "./Component/Navbar";
import "./Product.css";
import { useAuth } from "../components/AuthContext"; // ✅ import auth

const Product = () => {
  const { user } = useAuth(); // ✅ get logged-in user
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editPrice, setEditPrice] = useState("");

  // Fetch products from json-server
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products", err);
        setError("❌ Failed to load products.");
        setLoading(false);
      });
  }, []);

  // Save updated price
  const handleSavePrice = (id) => {
    const newProductData = { price: parseFloat(editPrice) };

    fetch(`http://localhost:3000/products/${id}`, {
      method: "PATCH", // only update price
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProductData),
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(
          products.map((p) => (p.id === id ? { ...p, price: data.price } : p))
        );
        setEditingId(null);
        setEditPrice("");
      })
      .catch((err) => console.error("Error updating price", err));
  };

  // Delete product
  const handleDeleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          setProducts(products.filter((p) => p.id !== id));
        })
        .catch((err) => console.error("Error deleting product", err));
    }
  };

  return (
    <>
      <Navbar />
      <div className="product-page">
        <h1>Our Products</h1>

        {loading && <p>Loading products...</p>}
        {error && <p className="error">{error}</p>}

        {!loading &&
          !error &&
          (products.length === 0 ? (
            <p>No products available.</p>
          ) : (
            <div className="product-grid">
              {products.map((product) => (
                <div className="product-card" key={product.id}>
                  <img src={product.image} alt={product.title} />
                  <h3>{product.title}</h3>
                  <p className="description">{product.description}</p>

                  {editingId === product.id ? (
                    <div className="edit-section">
                      <input
                        type="number"
                        value={editPrice}
                        onChange={(e) => setEditPrice(e.target.value)}
                      />
                      <button
                        className="btn save"
                        onClick={() => handleSavePrice(product.id)}
                      >
                        Save
                      </button>
                      <button
                        className="btn cancel"
                        onClick={() => setEditingId(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <>
                      <p>Price: ${product.price}</p>

                      {/* ✅ Only logged-in users see Edit/Delete */}
                      {user && (
                        <>
                          <button
                            className="btn edit"
                            onClick={() => {
                              setEditingId(product.id);
                              setEditPrice(product.price);
                            }}
                          >
                            Edit Price
                          </button>
                          <button
                            className="btn delete"
                            onClick={() => handleDeleteProduct(product.id)}
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          ))}
      </div>
    </>
  );
};

export default Product;
