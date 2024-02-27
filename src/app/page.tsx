import * as S from "./page.styled";
import MatrixBg from "./matrix.webp";
import LoginForm from "./Form";

export default function Home() {
  const agentName = "J.Smith";

  return (
    <S.Main>
      <S.BgImage src={MatrixBg} alt="Matrix Background" fill priority />
      <S.FirstMessage component="fieldset">
        <legend>Nic niewazny komunikat NR. 81/62/N0</legend>
        <p>
          Wszystko co jest tu napisane jest nieważne i tak naprawdę dopiero
          czytając kod będziesz mógł sam to przeczytać i swierdzić, że jest to
          nieważne. Nie mniej jednak musiałbyś przeczytać wszystko, żeby się
          przekonać, że dopiero na końcu tego zdania nie znajdziesz nic - jak w
          poprzednich.
          <br />
          Także bezpowrotnie zmarnowałeś kilkanaście sekund swojego życia.
        </p>
      </S.FirstMessage>
      <S.SecondWMessage component="fieldset">
        <legend>Zasady bezpieczeństwa</legend>
        <p>Wchodzisz do aplikacji o wysokim stopniu tajności. </p>
        <p>Wymagany kod:</p>
        <p>
          <b>5923 859/4 2424 0575 98/18 2137 105 40</b>
        </p>
      </S.SecondWMessage>
      <LoginForm agentName={agentName} />
    </S.Main>
  );
}
