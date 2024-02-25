import { Button as ButtonMui } from "@mui/material";
import styled from "@emotion/styled";

export const LoginFormWrapper = styled.form`
  max-width: 200px;
  padding: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  border-radius: 20px;
  border: 3px solid #092c06;
  box-shadow: 0px 0px 28px 40px #000000;

  backdrop-filter: blur(4px) brightness(0.4);
`;

export const Button = styled(ButtonMui)`
  background-color: #19900f;
  padding: 10px 20px;

  :hover {
    background-color: #17780e;
  }
`;
