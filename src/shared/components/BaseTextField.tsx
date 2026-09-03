import type { FC } from "react";

import { TextField } from "@mui/material";
import type { TextFieldProps } from "@mui/material";

export type BaseTextFieldProps = TextFieldProps;

/** Outlined text input wired to the system colours. */
const BaseTextField: FC<BaseTextFieldProps> = ({ sx, ...rest }) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      size="medium"
      sx={{
        "& .MuiInputLabel-root": { color: "text.secondary" },
        "& .MuiInputLabel-root.Mui-focused": { color: "primary.main" },
        "& .MuiInputBase-input": { color: "text.primary" },
        "& .MuiFormHelperText-root": { color: "text.secondary" },
        ...sx,
      }}
      {...rest}
    />
  );
};

export default BaseTextField;
