"use client";

import { useEffect, useState } from "react";

export default function DugoutTimer() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const gameTime = new Date();
      gameTime.setHours(18, 30, 0, 0); // 오늘 18:30

      // 이미 18:30이 지났으면 내일로 설정
      if (now > gameTime) {
        gameTime.setDate(gameTime.getDate() + 1);
      }

      const diffMs = gameTime - now;
      const diffMinutes = Math.floor(diffMs / 60000);
      const hours = Math.floor(diffMinutes / 60);
      const minutes = diffMinutes % 60;

      setTimeLeft(`${hours}시간 ${minutes}분`);
    };

    updateTimer(); // 최초 호출
    const interval = setInterval(updateTimer, 60000); // 1분마다 갱신

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      backgroundColor: "#1a1a2e",
      padding: "12px 16px",
      borderRadius: 12,
      color: "#fff",
      textAlign: "center",
      fontWeight: 600,
      fontSize: 16,
      marginTop: 24,     // 👈 위쪽 여백
      marginBottom: 24,  // 👈 아래쪽 여백도 추가
    }}>
      ⏱️  덕아웃 개장을 기다리는 중... {timeLeft}
    </div>
  );
}

