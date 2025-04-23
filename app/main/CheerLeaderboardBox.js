"use client";

export default function CheerLeaderboardBox() {
  return (
    <>
      <h2 style={sectionTitle}>📊 팀별 응원지수</h2>
      <ul style={listStyle}>
        <li>LG 트윈스 🔥 10,240</li>
        <li>롯데 자이언츠 🔥 9,980</li>
        <li>기아 타이거즈 🔥 9,100</li>
      </ul>
    </>
  );
}

const sectionTitle = {
  fontSize: 18,
  fontWeight: 700,
  marginBottom: 12,
};

const listStyle = {
  listStyle: "disc",
  paddingLeft: 20,
  fontSize: 14,
  lineHeight: 1.6,
};
