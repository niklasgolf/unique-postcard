'use client';

import { usePostcard } from '../../context/PostcardContext';
import styles from './recipient.module.css';

export default function RecipientEditor() {
  const { recipient, setRecipient } = usePostcard();

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Edit Recipient</h2>
      <input
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        placeholder="Enter recipient name"
        className={styles.input}
      />
    </div>
  );
}
