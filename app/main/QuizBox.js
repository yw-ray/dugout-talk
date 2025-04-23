"use client";

export default function QuizBox() {
  return (
    <>
      <h2 style={sectionTitle}>🧠 Dugout 예열 퀴즈</h2>
      <p style={{ marginBottom: 8 }}>Q. 삼중살이란 무엇일까요?</p>
      <input type="text" placeholder="" style={inputStyle} />
    </>
  );
}

const sectionTitle = {
  fontSize: 18,
  fontWeight: 700,
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

