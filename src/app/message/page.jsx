"use client";

import { usePostcard } from "../../context/PostcardContext";
import styles from "./message.module.css";

export default function MessageEditor() {
  const { message, setMessage } = usePostcard();

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Edit Message</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your message"
        rows={14}
        className={styles.textarea}
      />
    </div>
  );
}
