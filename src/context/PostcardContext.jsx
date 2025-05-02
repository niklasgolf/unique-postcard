'use client';

import { createContext, useContext, useState } from "react";

const PostcardContext = createContext();

export function PostcardProvider({ children }) {
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [sender, setSender] = useState("");
  const [recipient, setRecipient] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // ✅ Added field

  return (
    <PostcardContext.Provider
      value={{
        address, setAddress,
        message, setMessage,
        sender, setSender,
        recipient, setRecipient,
        imageUrl, setImageUrl // ✅ Added to context
      }}
    >
      {children}
    </PostcardContext.Provider>
  );
}

export function usePostcard() {
  return useContext(PostcardContext);
}
