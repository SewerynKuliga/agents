import Image from "next/image";
import styled from "@emotion/styled";

export const Main = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BgImage = styled(Image)`
  height: 100%;

  object-fit: cover;
  z-index: -1;
`;

export const FirstMessage = styled.fieldset`
  position: absolute;
  padding: 30px;
  top: 10%;
  left: 10%;

  max-width: 500px;

  border: 2px solid white;
  color: white;
  font-size: 20px;
  font-weight: 900;

  filter: blur(2.5px);

  @media (max-width: 620px) {
    top: 2%;
    right: 7%;
  }
`;

export const SecondWMessage = styled.fieldset`
  position: absolute;
  padding: 40px;
  text-align: center;
  bottom: 9%;
  right: 5%;

  max-width: 400px;

  border: 2px solid white;
  color: white;
  font-size: 20px;

  filter: blur(1.5px);

  @media (max-width: 620px) {
    left: 10%;
    padding: 10px;
  }
`;
