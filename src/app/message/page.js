'use client';
import { usePostcard } from "../context/PostcardContext";

export default function MessageEditor() {
  const { message, setMessage } = usePostcard();

  return (
    <div>
      <h2>Edit Message</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your message"
        rows={14}
        style={{ width: "100%", padding: "0.5rem", fontSize: "1rem" }}
      />
    </div>
  );
}
