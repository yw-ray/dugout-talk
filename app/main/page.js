"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { ref, get } from "firebase/database";
import { db, auth } from "@/lib/firebase";
import { useRouter } from "next/navigation"; // 추가
import BlueBox from "./BlueBox";
import QuizBox from "./QuizBox";
import InningMissionBox from "./InningMissionBox";
import TitleRankingBox from "./TitleRankingBox";
import CheerLeaderboardBox from "./CheerLeaderboardBox";
import MemeBox from "./MemeBox";
import NoticeBanner from "./NoticeBanner"; // 경로는 위치에 따라 수정
import DugoutTimer from "./DugoutTimer"; // 실제 경로에 맞게

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
      backgroundImage: "url('/images/bg-stadium.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      padding: "24px 16px",
      fontFamily: "Pretendard, sans-serif",
      color: "#fff",
      maxWidth: "480px",
      margin: "0 auto",
    }}
  >
    {/* 상단 로고 + 유저 정보 */}
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
      }}
    >
      <span
        style={{
          fontSize: 20,
          fontWeight: 800,
          color: "#fff",
          letterSpacing: 1,
        }}
      >
        Dugout-Talk
      </span>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 12,
          marginBottom: 16,
        }}
      >
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

        <Image
          src="/images/profile.png"
          width={36}
          height={36}
          alt="profile"
          style={{ borderRadius: "50%", cursor: "pointer" }}
          onClick={() => router.push("/profile")}
        />
      </div>
    </div>

    <NoticeBanner />
    <DugoutTimer />
    <BlueBox><QuizBox /></BlueBox>
    <BlueBox><InningMissionBox /></BlueBox>
    <BlueBox><TitleRankingBox /></BlueBox>
    <BlueBox><CheerLeaderboardBox /></BlueBox>
    <BlueBox><MemeBox /></BlueBox>
  </div>
  ); // ✅ return 닫기
} // ✅ 함수 닫기


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


