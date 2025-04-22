// /app/page.js
"use client";

import { useState } from "react";
import RegisterForm from "./RegisterForm"; // RegisterForm 컴포넌트를 같이 만들 예정

export default function StartPage() {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return <RegisterForm />;
  }

  return (
    <div style={{
      display: "flex", justifyContent: "center", alignItems: "center",
      flexDirection: "column", padding: 24, backgroundColor: "#f4f4f4",
      minHeight: "100vh"
    }}>
      <h1 style={{ fontSize: 32, fontWeight: "bold", marginBottom: 16 }}>Dugout Talk ⚾</h1>

      <img
        src="/dugout-talk-kbo.png"
        alt="Dugout Talk 일러스트"
        style={{ width: "100%", maxWidth: 600, objectFit: "contain", borderRadius: 12, marginBottom: 20 }}
      />

      <button
        onClick={() => setShowForm(true)}
        style={{
          padding: "12px 24px", fontSize: 16,
          backgroundColor: "#222", color: "#fff",
          border: "none", borderRadius: 8, cursor: "pointer"
        }}
      >
        회원가입하기
      </button>
    </div>
  );
}

