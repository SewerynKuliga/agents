"use client";

import { useEffect, useState } from "react";
import * as S from "./Inputs.styled";
import { useAppSelector } from "./store/storeHooks";
import { selectAuthAgentName } from "./store/auth/authSlice";

export default function LoginInput() {
  const agentName = useAppSelector(selectAuthAgentName);

  const [login, setLogin] = useState<string[]>([]);

  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    setAudio(new Audio("/sounds/machine_sound.wav"));
  }, []);

  useEffect(() => {
    if (!agentName) return;
    const interval = setInterval(() => {
      if (agentName.length > login.length) {
        audio && audio.play();
        setLogin((prevArray) => [...prevArray, agentName[login.length]]);
      } else {
        clearInterval(interval);
      }
    }, 600);

    return () => clearInterval(interval);
  }, [login, agentName, audio]);

  return (
    <S.TextField
      id="name"
      label="Login"
      type="text"
      value={login.join("")}
      disabled
    />
  );
}
