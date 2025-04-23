"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { ref, get } from "firebase/database";
import { db, auth } from "@/lib/firebase";
import { useRouter } from "next/navigation"; // 추가

export default function DugoutMain() {
  const [nickname, setNickname] = useState(null);
  const router = useRouter(); // 추가

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
        padding: "24px 16px",
        fontFamily: "Pretendard, sans-serif",
        color: "#fff",
        maxWidth: "480px",      // ✅ 모바일 최대 폭 제한
        margin: "0 auto",       // ✅ 가운데 정렬
      }}
    >

      <div style={{
        display: "flex", justifyContent: "flex-end",
        alignItems: "center", gap: 12, marginBottom: 16
      }}>

      {nickname === null ? (
        <span style={{ fontWeight: 600, opacity: 0.5 }}></span>
      ) : (
        <button
          onClick={() => router.push("/profile")}
          style={{
            background: "transparent",
            border: "none",
            color: "#fff",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 14,
            padding: 0,
          }}
        >
          {nickname}
        </button>
      )}

      {/* 프로필 이미지 클릭 → /profile */}
      <Image
        src="/profile.png"
        width={36}
        height={36}
        alt="profile"
        style={{ borderRadius: "50%", cursor: "pointer" }}
        onClick={() => router.push("/profile")}
      />
      </div>

      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <div style={noticeBox}>
          📢 이번 주 드립왕 이벤트가 시작되었습니다!
        </div>
      </div>

      <div style={blueBox}>
        <h2 style={sectionTitle}>🧠 Dugout 예열 퀴즈</h2>
        <p style={{ marginBottom: 8 }}>Q. 삼중살이란 무엇일까요?</p>
        <input type="text" placeholder="" style={inputStyle} />
      </div>

      <div style={blueBox}>
        <h2 style={sectionTitle}>🎯 오늘의 이닝 미션</h2>
        <p>실점했을 때 화내지 않기! 긍정 멘트 3회 이상 사용 시 멘탈왕 칭호 지급 🔥</p>
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
          <li>롯데 자이언츠 🔥 9,980</li>
          <li>기아 타이거즈 🔥 9,100</li>
        </ul>
      </div>

      <div style={blueBox}>
        <h2 style={sectionTitle}>🖼 오늘의 짤 드립 챌린지</h2>
        {[1, 2].map((num) => (
          <div key={num} style={memeCard}>
            <Image
              src={`/images/meme${num}.jpg`}
              width={300}
              height={180}
              alt={`meme-${num}`}
              style={{ borderRadius: 12, width: "auto", height: "20%" }}
            />
            <input type="text" placeholder="이 짤에 어울리는 드립은?" style={inputStyle} />
          </div>
        ))}
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
  margin: "0 auto", // ✅ 이거 추가
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

