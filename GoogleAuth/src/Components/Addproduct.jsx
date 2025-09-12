import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../Firebase/firebase";
import "../Components/Addproduct.css";

const Addproduct = () => {
  const initialState = {
    title: "",
    description: "",
    price: "",
    image: "",
    category: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [message, setMessage] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.title || !formData.price) {
      setMessage("⚠️ Title and Price are required!");
      return;
    }

    if (formData.price <= 0) {
      setMessage("⚠️ Price must be greater than 0");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "products"), {
        ...formData,
        price: Number(formData.price),
      });
      console.log("Document written with ID: ", docRef.id);
      setMessage("✅ Product added successfully!");
      setFormData(initialState);
    } catch (e) {
      console.error("Error adding document: ", e);
      setMessage("❌ Failed to add product!");
    }
  }

  return (
    <div className="add-product-container">
      <h2>Add Product</h2>

      {message && <p className="message">{message}</p>}

      <form onSubmit={handleSubmit} className="add-product-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />

        <button type="submit" className="btn-submit">
          ➕ Add Product
        </button>
      </form>
    </div>
  );
};

export default Addproduct;
