'use client';
import { usePostcard } from "../context/PostcardContext";

export default function RecipientEditor() {
  const { recipient, setRecipient } = usePostcard();

  return (
    <div>
      <h2>Edit Recipient</h2>
      <input
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        placeholder="Enter recipient name"
        style={{ width: "100%", padding: "0.5rem", fontSize: "1rem" }}
      />
    </div>
  );
}
