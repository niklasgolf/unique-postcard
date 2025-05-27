"use client";

import { usePostcard } from "../context/PostcardContext";
import { useAuth } from "../context/AuthContext";
// import { savePostcardForUser, addPostcard } from "../lib/firestoreHelpers";//23 maj
import { savePostcardForUser } from "../lib/firestoreHelpers";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import bgImage from "../images/vykort_bakgrund.png";
import styles from "./postcard-display.module.css";

export default function PostcardDisplay() {
  const {
    address,
    message,
    sender,
    recipient,
    imageUrl,
    editingId,
    setEditingId,
  } = usePostcard();

  const { user } = useAuth();

  const handleSave = async () => {
    try {
      if (!user) {
        alert("You must be logged in to save a postcard.");
        return;
      }

      if (editingId) {
        const ref = doc(db, "postcards", user.email, "postcards", editingId);
        await setDoc(ref, {
          address,
          message,
          sender,
          recipient,
          imageUrl,
          user: user.email,
          updatedAt: new Date(),
        });
        alert("Postcard updated!");
        setEditingId(null);
      } else {
        const postcardData = {
          address,
          message,
          sender,
          recipient,
          imageUrl,
          user: user.email,
        };
        // await savePostcardForUser(user.email, postcardData);//23 maj
        // await addPostcard(postcardData);//23 maj
        await savePostcardForUser(user.email, postcardData);
        // await addPostcard(postcardData);//borttaget
        alert("Postcard saved to your account and published publicly!");
      }
    } catch (err) {
      alert("Failed to save postcard: " + err.message);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>
        📬 {sender ? `${sender}'s` : ""} Postcard Preview
      </h2>

      {editingId && (
        <div
          style={{
            textAlign: "center",
            marginBottom: "1rem",
            color: "#007BFF",
          }}
        >
          ✏️ You are editing an existing postcard
        </div>
      )}

      <div className={styles.card}>
        <div className={styles.backgroundWrapper}>
          <img
            src={bgImage.src}
            alt="Postcard background"
            className={styles.bgImage}
          />
          <div className={styles.overlay}>
            <div className={styles.recipient}>{recipient || "(empty)"}</div>
            <div className={styles.address}>{address || "(empty)"}</div>
            <div className={styles.message}>{message || "(empty)"}</div>
          </div>
        </div>
        <div
          className={styles.frontside}
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          Frontside
        </div>
      </div>

      <button onClick={handleSave} className={styles.saveButton}>
        Save to Database
      </button>
    </div>
  );
}
