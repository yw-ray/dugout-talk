"use client";

export default function InningMissionBox() {
  return (
    <>
      <h2 style={sectionTitle}>🎯 오늘의 이닝 미션</h2>
      <p>실점했을 때 화내지 않기! 긍정 멘트 3회 이상 사용 시 멘탈왕 칭호 지급 🔥</p>
    </>
  );
}

const sectionTitle = {
  fontSize: 18,
  fontWeight: 700,
  marginBottom: 12,
};
