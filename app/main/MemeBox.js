"use client";

import Image from "next/image";

export default function MemeBox() {
  return (
    <>
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
    </>
  );
}

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
