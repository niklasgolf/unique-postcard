"use client";

import { usePostcard } from "../../context/PostcardContext";
import styles from "./Address.module.css";

export default function Address() {
  const { address, setAddress } = usePostcard();

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Edit Address</h2>
      <textarea
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        rows={4}
        className={styles.textarea}
        placeholder="Enter address..."
      />
    </div>
  );
}