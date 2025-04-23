"use client";

export default function NoticeBanner() {
  return (
    <div style={{ textAlign: "center", marginBottom: 20 }}>
      <div style={noticeBox}>
        📢 이번 주 드립왕 이벤트가 시작되었습니다!
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
