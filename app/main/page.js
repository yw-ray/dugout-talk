"use client";

import Image from "next/image";

export default function MainPage() {
  const matchups = [
    [["samsung", "Lions"], ["kt", "Wiz"]],
    [["nc", "Dinos"], ["doosan", "Bears"]],
    [["kiwoom", "Heroes"], ["kia", "Tigers"]],
    [["hanwha", "Eagles"], ["lg", "Twins"]],
  ];

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
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h1 style={{ fontSize: 32, fontWeight: "700" }}>Dugout Talk</h1>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontWeight: 600 }}>짜아구님</span>
          <Image src="/profile.png" width={40} height={40} alt="profile" style={{ borderRadius: "50%" }} />
        </div>
      </div>

      {/* 예측 박스 */}
      <div style={orangeBox}>
        <span style={{ fontSize: 20, fontWeight: 600 }}>5회말에 점수 낼까요?</span>
        <div style={{ display: "flex", gap: 12 }}>
          <button style={yesBtn}>예</button>
          <button style={noBtn}>아니오</button>
        </div>
      </div>

      {/* MVP 안내 */}
      <div style={orangeBoxThin}>
        <span>🏆 MVP 투표를 위해 응원팀 게시판으로 이동하세요!</span>
      </div>

      {/* 응원팀 채팅방 입장 */}
      <div style={orangeBox}>
        <span>응원팀 채팅방으로 입장</span>
      </div>

      {/* 명언 */}
      <div style={blueBox}>
        <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>오늘의 명언</div>
        <div style={quoteBox}>
          “이 팀의 정신력은 투수교체 타이밍만큼 늦다”
        </div>
      </div>

      {/* 메인 매치업 */}
      <div style={{ ...blueBox, paddingBottom: 20 }}>
        <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>메인경기 매치업</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          {matchups.map((pair, idx) => (
            <div key={idx} style={matchCard}>
              {pair.map(([id, name], teamIdx) => (
                <div key={id} style={{ display: "flex", alignItems: "center" }}>
                  {teamIdx === 1 && <span style={{ fontWeight: 700, margin: "0 8px" }}>VS</span>}
                  <Image
                    src={`/team-logos/${id}.png`}
                    width={50}
                    height={50}
                    alt={name}
                    style={{ background: "#fff", borderRadius: 8 }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 스타일 박스들
const orangeBox = {
  backgroundColor: "#D9531E",
  borderRadius: 16,
  padding: "20px 24px",
  marginBottom: 16,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const orangeBoxThin = {
  ...orangeBox,
  padding: "16px 20px",
  justifyContent: "center",
  fontSize: 16,
  fontWeight: 500,
};

const blueBox = {
  backgroundColor: "rgba(20, 30, 70, 0.8)",
  borderRadius: 16,
  padding: "20px 24px",
  marginBottom: 20,
};

const quoteBox = {
  border: "2px solid rgba(255,255,255,0.2)",
  borderRadius: 12,
  padding: 16,
  fontSize: 16,
  fontStyle: "italic",
  backgroundColor: "rgba(255,255,255,0.05)",
};

const matchCard = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "rgba(255,255,255,0.05)",
  borderRadius: 12,
  padding: "12px 16px",
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

