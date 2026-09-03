import type { FC, ReactNode } from "react";

import { Stack, Typography } from "@mui/material";

export type BaseMetaRowProps = {
  label: string;
  icon?: ReactNode;
  children: ReactNode;
};

/** Labelled row of inline items - "Tech stack", "AI tools", ... */
const BaseMetaRow: FC<BaseMetaRowProps> = ({ label, icon, children }) => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 0.75, sm: 1.5 }}
      sx={{ alignItems: { xs: "flex-start", sm: "baseline" } }}
    >
      <Stack
        direction="row"
        spacing={0.75}
        sx={{
          alignItems: "center",
          flexShrink: 0,
          minWidth: { sm: 92 },
          color: "text.disabled",
        }}
      >
        {icon}
        <Typography
          variant="caption"
          sx={{ fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.6 }}
        >
          {label}
        </Typography>
      </Stack>

      <Stack
        direction="row"
        spacing={0.75}
        useFlexGap
        sx={{ flexWrap: "wrap", alignItems: "center" }}
      >
        {children}
      </Stack>
    </Stack>
  );
};

export default BaseMetaRow;
