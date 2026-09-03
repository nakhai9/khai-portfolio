import type { FC } from "react";

import { Button } from "@mui/material";
import type { ButtonProps } from "@mui/material";

export type BaseButtonProps = ButtonProps & {
  /** Renders an anchor when provided. */
  href?: string;
  target?: string;
  rel?: string;
};

/** Application button - `contained` uses the accent, `outlined` the border token. */
const BaseButton: FC<BaseButtonProps> = ({
  variant = "contained",
  size = "large",
  sx,
  children,
  ...rest
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      color="primary"
      sx={{
        py: 1.25,
        ...(variant === "outlined" && {
          borderColor: "divider",
          color: "text.primary",
          "&:hover": {
            borderColor: "primary.main",
            color: "primary.main",
            backgroundColor: "background.paper",
          },
        }),
        ...(variant === "contained" && {
          "&:hover": { backgroundColor: "primary.light" },
        }),
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default BaseButton;
