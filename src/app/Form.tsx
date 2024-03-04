import * as S from "./Form.styled";
import LoginInput from "./LoginInput";
import KeyInput from "./KeyInput";

export default function LoginForm() {
  return (
    <S.LoginFormWrapper>
      <LoginInput />
      <KeyInput />
      <S.Button variant="contained" type="submit">
        LogIN
      </S.Button>
    </S.LoginFormWrapper>
  );
}
