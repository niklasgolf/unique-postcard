'use client';

import { usePostcard } from '../context/PostcardContext';
import { useAuth } from '../context/AuthContext';
import { savePostcardForUser, addPostcard } from '../lib/firestoreHelpers';
import bgImage from '../images/vykort_bakgrund.png';
import styles from './postcard-display.module.css';

export default function PostcardDisplay() {
  const { address, message, sender, recipient, imageUrl } = usePostcard();
  const { user } = useAuth();

  const handleSave = async () => {
    try {
      if (!user) {
        alert('You must be logged in to save a postcard.');
        return;
      }

      const postcardData = {
        address,
        message,
        sender,
        recipient,
        imageUrl,
        user: user.email,
      };

      // 🟣 1. Save to private collection
      await savePostcardForUser(user.email, postcardData);

      // 🟢 2. Save to public feed
      await addPostcard(postcardData);

      alert('Postcard saved to your account and published publicly!');
    } catch (err) {
      alert('Failed to save postcard: ' + err.message);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>
        📬 {sender ? `${sender}'s` : ''} Postcard Preview
      </h2>

      <div className={styles.card}>
        {/* Top half with background image */}
        <div className={styles.backgroundWrapper}>
          <img
            src={bgImage.src}
            alt="Postcard background"
            className={styles.bgImage}
          />

          <div className={styles.overlay}>
            <div className={styles.recipient}>
              {recipient || "(empty)"}
            </div>

            <div className={styles.address}>
              {address || "(empty)"}
            </div>

            <div className={styles.message}>
              {message || "(empty)"}
            </div>
          </div>
        </div>

        {/* Bottom half (frontside image) */}
        <div
          className={styles.frontside}
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          Frontside
        </div>
      </div>

      {/* Save Button */}
      <button onClick={handleSave} className={styles.saveButton}>
        Save to Database
      </button>
    </div>
  );
}
