"use client";

import { useState } from "react";
import RegisterStep1 from "./RegisterStep1";
import RegisterStep2 from "./RegisterStep2";

export default function RegisterForm({ onComplete }) {
  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState(null);

  if (step === 1) {
    return (
      <RegisterStep1
        onNext={(info) => {
          setUserInfo(info);
          setStep(2);
        }}
      />
    );
  }

  if (step === 2 && userInfo) {
    return <RegisterStep2 userInfo={userInfo} onComplete={onComplete} />;
  }

  return null;
}

