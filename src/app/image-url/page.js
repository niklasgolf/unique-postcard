'use client';
import { usePostcard } from "../context/PostcardContext";

export default function ImageUrlEditor() {
  const { imageUrl, setImageUrl } = usePostcard();

  return (
    <div>
      <h2>Edit Image URL</h2>
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Paste image URL here"
        style={{ width: "100%", padding: "0.5rem", fontSize: "1rem" }}
      />
      {imageUrl && (
        <div style={{ marginTop: "1rem" }}>
          <img src={imageUrl} alt="Preview" style={{ width: "100%", borderRadius: "8px" }} />
        </div>
      )}
    </div>
  );
}
