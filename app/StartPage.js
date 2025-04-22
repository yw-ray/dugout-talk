"use client";

import { useState } from "react";
import RegisterForm from "./RegisterForm";
import { useRouter } from "next/navigation";

export default function StartPage() {
  const [showRegister, setShowRegister] = useState(false);
  const router = useRouter();

  if (showRegister) {
    return (
      <RegisterForm
        onComplete={() => {
          console.log("✅ 회원가입 완료됨!");
          router.push("/main"); // 🚀 Main 페이지로 이동
        }}
      />
    );
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      padding: 24,
      backgroundColor: "#f9f9f9"
    }}>
      <h1 style={{ fontSize: 32, fontWeight: "bold", marginBottom: 16 }}>
        Dugout Talk ⚾
      </h1>

      <img
        src="/dugout-talk-kbo.png"
        alt="dugout talk hero"
        style={{
          width: "100%",
          maxWidth: 600,
          objectFit: "contain",
          borderRadius: 12,
          marginBottom: 20
        }}
      />

      <button
        onClick={() => setShowRegister(true)}
        style={{
          padding: "12px 24px",
          fontSize: 16,
          backgroundColor: "#222",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          cursor: "pointer"
        }}
      >
        회원가입하기
      </button>
    </div>
  );
}

