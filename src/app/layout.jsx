// src/app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "../context/AuthContext";
import { PostcardProvider } from "../context/PostcardContext";

import Header from "../components/Header";
import PostcardDisplay from "../components/PostcardDisplay";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

function LayoutContainer({ children }) {
  return (
    <div className={styles.layout}>
      {/* Left Side: Postcard */}
      <div className={styles.leftPane}>
        <PostcardDisplay />
      </div>

      {/* Right Side: Editor */}
      <div className={styles.rightPane}>
        {children}
      </div>
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <PostcardProvider>
          <body className={inter.className}>
            <Header />
            <LayoutContainer>{children}</LayoutContainer>
          </body>
        </PostcardProvider>
      </AuthProvider>
    </html>
  );
}
