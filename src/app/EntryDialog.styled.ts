import styled from "@emotion/styled";
import {
  TextField as TextFieldMui,
  Dialog as DialogMui,
  Button as ButtonMui,
} from "@mui/material";

export const Dialog = styled(DialogMui)`
  .MuiPaper-root {
    padding: 40px;
    background-color: black;
    border: 2px solid #19900f;
    border-radius: 20px;
    gap: 20px;
  }
  .MuiBackdrop-root {
    backdrop-filter: blur(15px);
  }
`;

export const Text = styled.div`
  color: #19900f;
  text-align: center;
`;

export const TextField = styled(TextFieldMui)`
  .MuiInputLabel-root {
    color: #19900f !important;
    font-weight: bolder;
  }

  .MuiInputBase-formControl {
    font-weight: 900;
    background: #082406;
  }

  .Mui-error {
    border-color: red !important;
  }

  fieldset {
    &.MuiOutlinedInput-notchedOutline {
      border-color: ${(props) => (props.error ? "red" : "#019201 !important")};
    }
  }
`;

export const Button = styled(ButtonMui)`
  background-color: #19900f;
  padding: 10px 20px;

  :hover {
    background-color: #17780e;
  }
`;
