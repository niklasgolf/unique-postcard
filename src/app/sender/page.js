'use client';
import { usePostcard } from "../context/PostcardContext";

export default function SenderEditor() {
  const { sender, setSender } = usePostcard();

  return (
    <div>
      <h2>Edit Sender</h2>
      <input
        type="text"
        value={sender}
        onChange={(e) => setSender(e.target.value)}
        placeholder="Enter sender name"
        style={{ width: "100%", padding: "0.5rem", fontSize: "1rem" }}
      />
    </div>
  );
}
