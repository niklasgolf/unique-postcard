'use client';

import Link from "next/link";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { user, logOut, signIn } = useAuth();

  return (
    <header style={{
      padding: "1rem",
      borderBottom: "1px solid #ccc",
      background: "#f1f1f1"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: "1rem"
      }}>
        {/* Left */}
        <div style={{ flex: "1" }}>
          <h1 style={{ marginBottom: "0.25rem", color: "#5c6ac4" }}>Unique Postcard</h1>
          <p style={{ marginBottom: "0.5rem" }}>{user?.email || "guest"}</p>
        </div>

        {/* Center */}
        <div style={{
          flex: "2",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <div style={{ display: "flex", gap: "1rem", marginBottom: "0.25rem" }}>
            <Link href="/" style={{ color: "#4b3f92", fontWeight: "bold" }}>Home</Link>
            <Link href="/all-postcards" style={{ color: "#4b3f92", fontWeight: "bold" }}>All Postcards</Link>
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
  <Link href="/message">Message</Link>
  <Link href="/address">Address</Link>
  <Link href="/sender">Sender</Link>
  <Link href="/recipient">Recipient</Link>
  <Link href="/image-url">Image</Link> {/* ✅ New */}
</div>

        </div>

        {/* Right */}
        <div style={{ flex: "1", textAlign: "right" }}>
          {user ? (
            <button
              onClick={logOut}
              style={{
                padding: "0.5rem 1rem",
                fontSize: "1rem",
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                borderRadius: "4px",
                cursor: "pointer",
                color: "#5c6ac4"
              }}
            >
              Sign out
            </button>
          ) : (
            <button
              onClick={signIn}
              style={{
                padding: "0.5rem 1rem",
                fontSize: "1rem",
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                borderRadius: "4px",
                cursor: "pointer",
                color: "#5c6ac4"
              }}
            >
              Sign in with Google
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
