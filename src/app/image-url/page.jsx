'use client';

import { usePostcard } from '../../context/PostcardContext';
import styles from './image-url.module.css';

export default function ImageUrlEditor() {
  const { imageUrl, setImageUrl } = usePostcard();

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Edit Image URL</h2>
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Paste image URL here"
        className={styles.input}
      />
      {imageUrl && (
        <div className={styles.previewWrapper}>
          <img src={imageUrl} alt="Preview" className={styles.previewImage} />
        </div>
      )}
    </div>
  );
}
