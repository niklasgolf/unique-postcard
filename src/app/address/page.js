'use client';
import { usePostcard } from "../context/PostcardContext";

export default function AddressEditor() {
  const { address, setAddress } = usePostcard();

  return (
    <div>
      <h2>Edit Address</h2>
      <textarea
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        rows={4}
        style={{
          width: "100%",
          padding: "0.75rem",
          fontSize: "1rem",
          borderRadius: "8px",
          border: "1px solid var(--input-border)",
          backgroundColor: "var(--input-bg)",
          boxShadow: "0 0 0 2px transparent",
        }}
        placeholder="Enter address..."
      />
    </div>
  );
}
