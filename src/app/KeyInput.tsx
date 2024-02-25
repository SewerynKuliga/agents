import { useState } from "react";
import * as S from "./Inputs.styled";

export default function KeyInput() {
  const [password, setPassword] = useState("");

  return (
    <S.TextField
      id="key"
      label="Agent key"
      type="text"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  );
}
