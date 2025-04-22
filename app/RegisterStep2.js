"use client";

import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ref, set } from "firebase/database";
import { db } from "@/lib/firebase";

export default function RegisterStep2({ userInfo, onComplete }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    if (isLoading) return; // 중복 클릭 방지
    setIsLoading(true);

    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await set(ref(db, `users/${user.uid}`), {
        nickname: userInfo.nickname,
        team: userInfo.team,
        email: user.email,
        method: "google"
      });

      if (typeof onComplete === "function") onComplete();
    } catch (error) {
      console.error("❌ Google 로그인 실패:", error);
      alert("Google 로그인에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h2>회원가입 - Step 2</h2>
      <p>Google 계정으로 인증을 완료해주세요</p>

      <button
        onClick={handleGoogleLogin}
        disabled={isLoading}
        style={{
          padding: 10,
          backgroundColor: isLoading ? "#aaa" : "#4285F4",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          fontWeight: "bold",
          marginTop: 16,
          cursor: isLoading ? "not-allowed" : "pointer"
        }}
      >
        {isLoading ? "처리 중..." : "Google로 시작하기"}
      </button>
    </div>
  );
}

