"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { ref, get } from "firebase/database";
import { db, auth } from "@/lib/firebase";

export default function DugoutMain() {
  const [nickname, setNickname] = useState("익명 유저");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const snapshot = await get(ref(db, `users/${user.uid}`));
          if (snapshot.exists()) {
            const data = snapshot.val();
            setNickname(data.nickname || "익명 유저");
          }
        } catch (err) {
          console.error("❌ Firebase에서 닉네임 불러오기 실패:", err);
        }
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div
      style={{
        backgroundImage: "url('/bg-stadium.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "24px",
        fontFamily: "Pretendard, sans-serif",
        color: "#fff",
      }}
    >
      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <span style={{ fontWeight: 600 }}>{nickname}</span>
        <Image src="/profile.png" width={36} height={36} alt="profile" style={{ borderRadius: "50%" }} />
      </div>

      <div style={noticeBox}>📢 이번 주 드립왕 이벤트가 시작되었습니다!</div>

      <div style={blueBox}>
        <h2 style={sectionTitle}>🖼 오늘의 짤 드립 챌린지</h2>
        {[1, 2].map((num) => (
          <div key={num} style={memeCard}>
            <Image
              src={`/images/meme${num}.jpg`}
              width={300}
              height={180}
              alt={`meme-${num}`}
              style={{ borderRadius: 12, width: "100%", height: "auto" }}
            />
            <input type="text" placeholder="이 짤에 어울리는 드립은?" style={inputStyle} />
          </div>
        ))}
      </div>

      <div style={blueBox}>
        <h2 style={sectionTitle}>🧠 Dugout 예열 퀴즈</h2>
        <p style={{ marginBottom: 8 }}>Q. 오늘 경기에서 가장 먼저 점수를 낼 팀은?</p>
        <div style={{ display: "flex", gap: 12 }}>
          <button style={yesBtn}>우리팀</button>
          <button style={noBtn}>상대팀</button>
        </div>
      </div>

      <div style={blueBox}>
        <h2 style={sectionTitle}>🎯 오늘의 이닝 미션</h2>
        <p>실점했을 때 화내지 않기! 긍정 멘트 3회 이상 사용 시 '멘탈왕' 칭호 지급 🔥</p>
      </div>

      <div style={blueBox}>
        <h2 style={sectionTitle}>🏆 주간 타이틀 랭킹</h2>
        <ul style={listStyle}>
          <li>드립왕: 감성 유격수 (12회)</li>
          <li>응원왕: 광기 포수 (9회)</li>
          <li>멘탈왕: 침착 외야수 (7회)</li>
        </ul>
      </div>

      <div style={blueBox}>
        <h2 style={sectionTitle}>📊 팀별 응원지수</h2>
        <ul style={listStyle}>
          <li>LG 트윈스 🔥 10,240</li>
          <li>SSG 랜더스 🔥 9,980</li>
          <li>기아 타이거즈 🔥 9,100</li>
        </ul>
      </div>
    </div>
  );
}

const noticeBox = {
  backgroundColor: "#D9531E",
  borderRadius: 9999,
  padding: "8px 16px",
  marginBottom: 20,
  fontWeight: 600,
  fontSize: 14,
  display: "inline-block",
  textAlign: "center",
};

const blueBox = {
  backgroundColor: "rgba(20, 30, 70, 0.8)",
  borderRadius: 16,
  padding: "20px 24px",
  marginBottom: 20,
};

const sectionTitle = {
  fontSize: 18,
  fontWeight: 700,
  marginBottom: 12,
};

const memeCard = {
  backgroundColor: "rgba(255,255,255,0.05)",
  padding: 16,
  borderRadius: 12,
  marginBottom: 12,
};

const inputStyle = {
  marginTop: 8,
  width: "100%",
  padding: 10,
  borderRadius: 8,
  border: "1px solid rgba(255,255,255,0.2)",
  backgroundColor: "rgba(255,255,255,0.1)",
  color: "#fff",
  fontSize: 14,
};

const yesBtn = {
  padding: "8px 20px",
  backgroundColor: "#192f5d",
  color: "#fff",
  borderRadius: 8,
  border: "none",
  fontWeight: 600,
  cursor: "pointer",
};

const noBtn = {
  ...yesBtn,
  backgroundColor: "#131b30",
};

const listStyle = {
  listStyle: "disc",
  paddingLeft: 20,
  fontSize: 14,
  lineHeight: 1.6,
};

