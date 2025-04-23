// src/app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import { PostcardProvider } from "./context/PostcardContext";

import Header from "./components/Header";
import PostcardDisplay from "./components/PostcardDisplay";

const inter = Inter({ subsets: ["latin"] });

function LayoutContainer({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "90vh" }}>
      {/* Left Side: Postcard */}
      <div style={{ flex: 1, padding: "1rem", borderRight: "1px solid #ccc" }}>
        <PostcardDisplay />
      </div>

      {/* Right Side: Editor */}
      <div style={{ flex: 1, padding: "1rem" }}>
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
