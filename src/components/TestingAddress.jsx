"use client";

import { useState } from "react";

export function createHelloMessage(name) {
  return `Hello ${name}`;
}

export default function TestingAddress() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = () => {
    const msg = createHelloMessage(name);
    setMessage(msg);
  };

  return (
    <div>
      <h3>Unit Tests</h3>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={handleClick}>Create Hello Message</button>
      {message && <p data-testid="hello-message">{message}</p>}
    </div>
  );
}
