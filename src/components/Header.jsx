"use client";

import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import styles from "./header.module.css";

export default function Header() {
  const { user, logOut, signIn } = useAuth();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Left */}
        <div className={styles.left}>
          <h1 className={styles.title}>Unique Postcard</h1>
          <p className={styles.user}>{user?.email || "guest"}</p>
        </div>

        {/* Center */}
        <div className={styles.center}>
          <div className={styles.nav}>
            <Link href="/" className={styles.link}>
              Home
            </Link>
            <Link href="/mypostcards" className={styles.link}>
              My Postcards
            </Link>
            <Link href="/allpostcards" className={styles.link}>
              All Postcards
            </Link>
          </div>
          <div className={styles.nav}>
            <Link href="/message">Message</Link>
            <Link href="/address">Address</Link>
            <Link href="/sender">Sender</Link>
            <Link href="/recipient">Recipient</Link>
            <Link href="/postcardimage">Image</Link>
          </div>
        </div>

        {/* Right */}
        <div className={styles.right}>
          {user ? (
            <button onClick={logOut} className={styles.button}>
              Sign out
            </button>
          ) : (
            <button onClick={signIn} className={styles.button}>
              Sign in with Google
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
