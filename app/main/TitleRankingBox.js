"use client";

export default function TitleRankingBox() {
  return (
    <>
      <h2 style={sectionTitle}>🏆 주간 타이틀 랭킹</h2>
      <ul style={listStyle}>
        <li>드립왕: 감성 유격수 (12회)</li>
        <li>응원왕: 광기 포수 (9회)</li>
        <li>멘탈왕: 침착 외야수 (7회)</li>
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

