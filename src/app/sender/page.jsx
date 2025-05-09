'use client';

import { usePostcard } from '../../context/PostcardContext';
import styles from './sender.module.css';

export default function SenderEditor() {
  const { sender, setSender } = usePostcard();

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Edit Sender</h2>
      <input
        type="text"
        value={sender}
        onChange={(e) => setSender(e.target.value)}
        placeholder="Enter sender name"
        className={styles.input}
      />
    </div>
  );
}
