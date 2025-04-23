"use client";

export default function BlueBox({ children }) {
  return (
    <div style={{
      backgroundColor: "rgba(20, 30, 70, 0.8)",
      borderRadius: 16,
      padding: "20px 24px",
      marginBottom: 20,
    }}>
      {children}
    </div>
  );
}

