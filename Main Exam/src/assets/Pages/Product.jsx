import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Product.css"; // ✅ styling file

const Product = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });
  const [editId, setEditId] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const limit = 5;
  const apiUrl = "http://localhost:3000/products"; // JSON-server API

  // Fetch products with pagination
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${apiUrl}?_page=${page}&_limit=${limit}`);
      setProducts(res.data);

      // pagination count
      const totalCount = res.headers["x-total-count"];
      setTotalPages(Math.ceil(totalCount / limit));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  // Input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add / Update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`${apiUrl}/${editId}`, form);
        setEditId(null);
      } else {
        await axios.post(apiUrl, form);
      }
      setForm({ title: "", price: "", description: "", image: "" });
      fetchProducts();
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  // Edit product
  const handleEdit = (product) => {
    setForm(product);
    setEditId(product.id);
  };

  // Delete product
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="container">
      <h1>Products</h1>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <input
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />
        <button type="submit">{editId ? "Update" : "Add"}</button>
      </form>

      {/* Product List */}
      <div className="products">
        {products.map((el) => (
          <div key={el.id} className="product-card">
            <h3>{el.title}</h3>
            <img src={el.image} alt={el.title} />
            <p>
              <b>Price:</b> ${el.price}
            </p>
            <p>{el.description}</p>
            <button onClick={() => handleEdit(el)}>Edit</button>
            <button onClick={() => handleDelete(el.id)}>Delete</button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Product;
