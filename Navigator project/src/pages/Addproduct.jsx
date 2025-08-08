import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import "./Cart.css"; // keep your shared form CSS here

const Addproduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleAddProduct = (e) => {
    e.preventDefault();

    const newProduct = {
      title,
      price: parseFloat(price),
      image,
      description,
    };

    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Product added successfully!");
        setTitle("");
        setPrice("");
        setImage("");
        setDescription("");
      })
      .catch((err) => {
        console.error("Error adding product:", err);
      });
  };

  return (
    <>
      <Navbar />
      <div className="form-container">
        <h1>Add New Product</h1>
        <form onSubmit={handleAddProduct}>
          <input
            type="text"
            placeholder="Product Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <button type="submit">Add Product</button>
        </form>
      </div>
    </>
  );
};

export default Addproduct;
