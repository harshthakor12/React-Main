import React, { useEffect, useState } from "react";
import Navbar from "./Component/Navbar";
import "./Product.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      });
  }, []);

  // Save updated price
  const handleSavePrice = (id) => {
    const updatedProduct = products.find((p) => p.id === id);
    const newProductData = { ...updatedProduct, price: parseFloat(editPrice) };

    fetch(`http://localhost:3000/products/${id}`, {
      method: "PUT",
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
        {loading ? (
          <p>Loading products...</p>
        ) : products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>

                {editingId === product.id ? (
                  <>
                    <input
                      type="number"
                      value={editPrice}
                      onChange={(e) => setEditPrice(e.target.value)}
                    />
                    <button onClick={() => handleSavePrice(product.id)}>
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <p>Price: ${product.price}</p>
                    <button
                      onClick={() => {
                        setEditingId(product.id);
                        setEditPrice(product.price);
                      }}
                    >
                      Edit Price
                    </button>
                  </>
                )}

                {/* Delete button */}
                <button
                  style={{
                    marginTop: "10px",
                    backgroundColor: "red",
                    color: "white",
                    padding: "5px 10px",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Product;
