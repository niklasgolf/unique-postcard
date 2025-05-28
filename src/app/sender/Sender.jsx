"use client";

import { usePostcard } from "../../context/PostcardContext";
import styles from "./Sender.module.css";

export default function Sender() {
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
