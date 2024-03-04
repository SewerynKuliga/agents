"use client";

import * as S from "./EntryDialog.styled";
import { useState } from "react";
import { useDisclosure } from "./hooks/useDisclosure";
import { useAppDispatch } from "./store/storeHooks";
import { logIn } from "./store/auth/authSlice";

export default function EntryDialog() {
  const [agentName, setAgentName] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useAppDispatch();

  const { isOpen, onClose } = useDisclosure(true);

  const handleClick = () => {
    if (agentName.length == 0) {
      return setError(true);
    }
    setError(false);
    dispatch(logIn(agentName));
    onClose();
  };

  //TODO implement yup or zod

  return (
    <S.Dialog open={isOpen}>
      <S.Text>Wprowadź nazwę agenta:</S.Text>
      <S.TextField
        id="agent_name"
        type="text"
        value={agentName}
        onChange={(e) => setAgentName(e.target.value)}
        error={error}
      />
      <S.Button variant="contained" onClick={handleClick}>
        Wejdź
      </S.Button>
    </S.Dialog>
  );
}
