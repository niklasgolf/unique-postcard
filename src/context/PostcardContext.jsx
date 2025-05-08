"use client";

import { createContext, useContext, useState } from "react";

const PostcardContext = createContext();

export function PostcardProvider({ children }) {
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [sender, setSender] = useState("");
  const [recipient, setRecipient] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [editingId, setEditingId] = useState(null); // ✅ track editing state

  return (
    <PostcardContext.Provider
      value={{
        address,
        setAddress,
        message,
        setMessage,
        sender,
        setSender,
        recipient,
        setRecipient,
        imageUrl,
        setImageUrl,
        editingId,
        setEditingId,
      }}
    >
      {children}
    </PostcardContext.Provider>
  );
}

export function usePostcard() {
  return useContext(PostcardContext);
}
