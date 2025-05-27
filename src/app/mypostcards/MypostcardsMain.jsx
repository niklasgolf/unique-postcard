"use client";

import { useEffect, useState } from "react";
import { getUserPostcards, deletePostcard } from "../../lib/firestoreHelpers";
import styles from "./Mypostcards.module.css";
import { useAuth } from "../../context/AuthContext";
import { usePostcard } from "../../context/PostcardContext";

export default function MypostcardsMain() {
  const [postcards, setPostcards] = useState([]);
  const { user } = useAuth();
  const {
    setAddress,
    setMessage,
    setSender,
    setRecipient,
    setImageUrl,
    setEditingId,
  } = usePostcard();

  useEffect(() => {
    async function fetchData() {
      if (user) {
        const data = await getUserPostcards(user.email);
        setPostcards(data);
      }
    }

    fetchData();
  }, [user]);

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Delete this postcard?");
    if (!confirmed) return;

    try {
      await deletePostcard(user.email, id);
      setPostcards((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      alert("Error deleting postcard: " + err.message);
    }
  };

  const handleEdit = (card) => {
    setAddress(card.address);
    setMessage(card.message);
    setSender(card.sender);
    setRecipient(card.recipient);
    setImageUrl(card.imageUrl);
    setEditingId(card.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>My Postcards</h2>
      {postcards.length === 0 && (
        <p className={styles.info}>No postcards found.</p>
      )}

      {postcards.map((card) => (
        <div key={card.id} className={styles.card}>
          <img src={card.imageUrl} alt="Postcard" className={styles.image} />
          <div className={styles.details}>
            <p>
              <strong>To:</strong> {card.recipient}
            </p>
            <p>
              <strong>Address:</strong> {card.address}
            </p>
            <p>
              <strong>Message:</strong> {card.message}
            </p>
            <p>
              <strong>From:</strong> {card.sender}
            </p>
            <div className={styles.buttonGroup}>
              <button
                onClick={() => handleDelete(card.id)}
                className={styles.buttonDelete}
              >
                Delete
              </button>
              <button
                onClick={() => handleEdit(card)}
                className={styles.buttonEdit}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
