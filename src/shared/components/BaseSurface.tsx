import type { FC, ReactNode } from "react";

import { Paper } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";

export type BaseSurfaceProps = {
  children: ReactNode;
  /** `raised` is a lighter panel meant to sit on top of a `default` one. */
  variant?: "default" | "raised";
  interactive?: boolean;
  sx?: SxProps<Theme>;
};

/** Generic panel that carries the app surface / border tokens. */
const BaseSurface: FC<BaseSurfaceProps> = ({
  children,
  variant = "default",
  interactive = false,
  sx,
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        border: "1px solid",
        borderColor: "divider",
        backgroundColor:
          variant === "raised" ? "secondary.light" : "background.paper",
        transition: "border-color .25s ease, transform .25s ease",
        ...(interactive && {
          "&:hover": {
            borderColor: "primary.main",
            transform: "translateY(-4px)",
          },
        }),
        ...sx,
      }}
    >
      {children}
    </Paper>
  );
};

export default BaseSurface;
