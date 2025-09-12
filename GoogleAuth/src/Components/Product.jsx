import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db, auth } from "../Firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "../App.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [newPrice, setNewPrice] = useState("");
  const [user] = useAuthState(auth);

  // fetch data
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // delete product
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      setProducts((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // start editing price
  const startEdit = (id, currentPrice) => {
    setEditingId(id);
    setNewPrice(currentPrice);
  };

  // save updated price
  const savePrice = async (id) => {
    try {
      const productRef = doc(db, "products", id);
      await updateDoc(productRef, { price: newPrice });
      setProducts((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, price: newPrice } : item
        )
      );
      setEditingId(null);
      setNewPrice("");
    } catch (error) {
      console.error("Error updating price:", error);
    }
  };

  return (
    <>
      <h1>Products</h1>
      <div className="product-container">
        {products.map((el) => (
          <div key={el.id} className="product-card">
            <img src={el.image} alt={el.title} />
            <h2>{el.title}</h2>

            {editingId === el.id ? (
              <div>
                <input
                  type="number"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                  className="price-input"
                />
                {user && (
                  <button
                    onClick={() => savePrice(el.id)}
                    className="button button-save"
                  >
                    Save
                  </button>
                )}
              </div>
            ) : (
              <p>
                <strong>Price:</strong> ${el.price}{" "}
                {user && (
                  <button
                    onClick={() => startEdit(el.id, el.price)}
                    className="button button-edit"
                  >
                    Edit
                  </button>
                )}
              </p>
            )}

            <p>{el.description}</p>

            {user && (
              <button
                onClick={() => handleDelete(el.id)}
                className="button button-delete"
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
