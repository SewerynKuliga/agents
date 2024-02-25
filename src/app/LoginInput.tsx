import { useEffect, useState } from "react";
import * as S from "./Inputs.styled";

export default function LoginInput() {
  const agentName = "J.Smith";
  const [login, setLogin] = useState<string[]>([]);

  const audio = new Audio("/sounds/machine_sound.wav");
  audio.muted;

  useEffect(() => {
    const interval = setInterval(() => {
      if (agentName.length > login.length) {
        audio.play();
        setLogin((prevArray) => [...prevArray, agentName[login.length]]);
      } else {
        clearInterval(interval);
      }
    }, 400);

    return () => clearInterval(interval);
  }, [login, agentName]);

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
