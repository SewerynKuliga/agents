import * as S from "./Form.styled";
import LoginInput from "./LoginInput";
import KeyInput from "./KeyInput";

type LoginFormType = {
  agentName: string;
};

export default function LoginForm({ agentName }: LoginFormType) {
  return (
    <S.LoginFormWrapper>
      <LoginInput agentName={agentName} />
      <KeyInput />
      <S.Button variant="contained" type="submit">
        LogIN
      </S.Button>
    </S.LoginFormWrapper>
  );
}
