"use client";

import { useState } from "react";

export default function RegisterStep1({ onNext }) {
  const [nickname, setNickname] = useState("");
  const [team, setTeam] = useState("");

  const teams = ["롯데", "SSG", "두산", "LG", "KT", "삼성", "NC", "한화", "키움", "KIA"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nickname || !team) {
      alert("닉네임과 응원팀을 입력해주세요");
      return;
    }

    onNext({ nickname, team });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 400, margin: "0 auto" }}
    >
      <h2>회원가입 - Step 1</h2>
      <input
        type="text"
        placeholder="닉네임 입력"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        style={{ padding: 8 }}
      />
      <select value={team} onChange={(e) => setTeam(e.target.value)} style={{ padding: 8 }}>
        <option value="">응원팀 선택</option>
        {teams.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      <button type="submit" style={{ padding: 10 }}>다음으로</button>
    </form>
  );
}

