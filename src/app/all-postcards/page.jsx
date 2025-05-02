"use client";

import { useEffect, useState } from "react";
import { getUserPostcards, deletePostcard } from "../../lib/firestoreHelpers";
import styles from "./all-postcards.module.css";
import { useAuth } from "../../context/AuthContext";

export default function AllPostcardsPage() {
  const [postcards, setPostcards] = useState([]);
  const { user } = useAuth();

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

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>📬 Your Postcards</h2>
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
            <button onClick={() => handleDelete(card.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
