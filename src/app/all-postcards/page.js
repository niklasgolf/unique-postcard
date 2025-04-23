'use client';

import { useEffect, useState } from "react";
import { getAllPostcards } from "../lib/firestoreHelpers";

export default function AllPostcardsPage() {
  const [postcards, setPostcards] = useState([]);

  useEffect(() => {
    getAllPostcards().then(setPostcards).catch(err => {
      console.error("Failed to fetch postcards:", err);
    });
  }, []);

  return (
    <section style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h2>📬 All Postcards</h2>
      {postcards.length === 0 ? (
        <p>No postcards yet.</p>
      ) : (
        postcards.map(postcard => (
          <div key={postcard.id} className="card" style={{ marginBottom: "2rem" }}>
            <p><strong>{postcard.sender}</strong> ➜ {postcard.recipient}</p>
            <p>💬 {postcard.message}</p>
            {postcard.imageUrl && (
              <img
                src={postcard.imageUrl}
                alt="Postcard"
                style={{ width: "50%", borderRadius: "10px", marginTop: "1rem" }}
              />
            )}
            <p style={{ fontSize: "0.9rem", color: "#555" }}>{postcard.user}</p>
          </div>
        ))
      )}
    </section>
  );
}
