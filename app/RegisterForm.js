"use client";

import { useState } from "react";
import {
  getAuth,
  signInAnonymously,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { ref, set } from "firebase/database";
import { db } from "@/lib/firebase";

export default function RegisterForm({ onComplete }) {
  const [nickname, setNickname] = useState("");
  const [modifier, setModifier] = useState("");
  const [team, setTeam] = useState("");
  const [birth, setBirth] = useState("");

  const modifiers = [
    "광기", "감성", "화난", "멘탈나감", "냉철한",
    "방출위기", "패기", "극딜", "철벽", "벤치의"
  ];

  const teams = [
    "롯데", "SSG", "두산", "LG", "KT", "삼성", "NC", "한화", "키움", "KIA"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nickname || !modifier || !team || !birth) {
      alert("모든 항목을 입력해주세요");
      return;
    }

    try {
      const auth = getAuth();
      const result = await signInAnonymously(auth);
      const uid = result.user.uid;

      await set(ref(db, `users/${uid}`), {
        nickname,
        modifier,
        team,
        birth,
        method: "anonymous"
      });

      if (typeof onComplete === "function") onComplete();
    } catch (error) {
      console.error("❌ Firebase 저장 실패:", error);
      alert("회원가입 중 오류가 발생했습니다.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await set(ref(db, `users/${user.uid}`), {
        nickname: user.displayName || "익명 유저",
        email: user.email,
        method: "google"
      });

      if (typeof onComplete === "function") onComplete();
    } catch (error) {
      console.error("❌ Google 로그인 실패:", error);
      alert("Google 로그인에 실패했습니다.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
        backgroundColor: "#f9f9f9",
        padding: 24,
        borderRadius: 12,
        maxWidth: 400,
        margin: "0 auto"
      }}
    >
      <h2>회원가입</h2>

      {/* Google 로그인 */}
      <button
        type="button"
        onClick={handleGoogleLogin}
        style={{
          padding: 10,
          width: "100%",
          backgroundColor: "#4285F4",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          fontWeight: "bold"
        }}
      >
        Google로 시작하기
      </button>

      <hr style={{ width: "100%", border: "0.5px solid #ccc" }} />

      {/* 수동 입력 */}
      <input
        type="text"
        placeholder="닉네임 입력"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        style={{ padding: 8, width: "100%" }}
      />
      <select
        value={modifier}
        onChange={(e) => setModifier(e.target.value)}
        style={{ padding: 8, width: "100%" }}
      >
        <option value="">수식어 선택</option>
        {modifiers.map((mod) => (
          <option key={mod} value={mod}>{mod}</option>
        ))}
      </select>
      <select
        value={team}
        onChange={(e) => setTeam(e.target.value)}
        style={{ padding: 8, width: "100%" }}
      >
        <option value="">응원하는 팀 선택</option>
        {teams.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      <input
        type="date"
        value={birth}
        onChange={(e) => setBirth(e.target.value)}
        style={{ padding: 8, width: "100%" }}
      />
      <button type="submit" style={{ padding: 10, width: "100%" }}>
        시작하기
      </button>
    </form>
  );
}

