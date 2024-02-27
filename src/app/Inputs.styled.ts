"use client";

import styled from "@emotion/styled";
import { TextField as TextFieldMui } from "@mui/material";

export const TextField = styled(TextFieldMui)`
  .MuiInputLabel-root {
    color: #19900f !important;
    font-weight: bolder;
  }

  .MuiInputBase-formControl {
    font-weight: 900;
    background: #082406;
  }

  fieldset {
    &.MuiOutlinedInput-notchedOutline {
      border-color: #019201 !important;
    }
  }
`;
