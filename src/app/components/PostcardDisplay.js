'use client';

import { usePostcard } from "../context/PostcardContext";
import bgImage from "../images/vykort_bakgrund.png";

export default function PostcardDisplay() {
  const { address, message, sender, recipient, imageUrl } = usePostcard();

  return (
    <div style={{ padding: "1rem 0" }}>
      <h2 style={{
        color: "var(--primary-color)",
        fontSize: "24px",
        fontWeight: "700",
        marginBottom: "1rem"
      }}>
        📬 {sender ? `${sender}'s` : ''} Postcard Preview
      </h2>

      <div
        style={{
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          border: "1px solid #ccc",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        {/* Top half with background image */}
        <div style={{ position: "relative", width: "100%", height: "auto" }}>
          <img
            src={bgImage.src}
            alt="Postcard background"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "cover",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              padding: "2rem",
              color: "#000",
            }}
          >
            {/* 🟠 Recipient */}
            <div
              style={{
                position: "absolute",
                top: "38.5%",
                left: "61.5%",
                width: "32%",
                height: "5%",
                fontWeight: "600",
                fontSize: "1.1rem",
                overflow: "hidden",
                border: "1px solid red",
                backgroundColor: "rgba(255,255,255,0.5)",
              }}
            >
              {recipient || "(empty)"}
            </div>

            {/* 🔵 Address */}
            <div
              style={{
                position: "absolute",
                top: "45%",
                left: "61.5%",
                width: "32%",
                height: "26%",
                fontWeight: "500",
                fontSize: "1rem",
                whiteSpace: "pre-wrap",
                border: "1px solid blue",
                backgroundColor: "rgba(255,255,255,0.5)",
              }}
            >
              {address || "(empty)"}
            </div>

            {/* 🟢 Message */}
            <div
              style={{
                position: "absolute",
                top: "20%",       // around “Dear Mary,”
                left: "4%",       // left margin of text
                width: "50%",       // matches text column
                height: "52%",      // down to “Aaron”
                fontSize: "1rem",
                whiteSpace: "pre-wrap",
                lineHeight: "1.4",
                border: "1px solid green",
                backgroundColor: "rgba(255,255,255,0.6)",
                padding: "0.5rem",
              }}
            >
              {message || "(empty)"}
            </div>
          </div>
        </div>

        {/* Bottom half (frontside image) */}
        <div
          style={{
            position: "relative",
            height: "400px",
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "#222",
          }}
        >
          Frontside
        </div>
      </div>
    </div>
  );
}
