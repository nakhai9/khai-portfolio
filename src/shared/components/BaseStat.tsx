import type { FC } from "react";

import { Stack, Typography } from "@mui/material";

import BaseSurface from "./BaseSurface";

export type BaseStatProps = {
  value: string;
  label: string;
};

/** Highlighted number plus caption, used in the "About me" summary. */
const BaseStat: FC<BaseStatProps> = ({ value, label }) => {
  return (
    <BaseSurface
      variant="raised"
      sx={{
        px: 2,
        py: 1.5,
        minWidth: 112,
        textAlign: "center",
      }}
    >
      <Stack spacing={0.5}>
        <Typography variant="h5" sx={{ color: "primary.main" }}>
          {value}
        </Typography>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          {label}
        </Typography>
      </Stack>
    </BaseSurface>
  );
};

export default BaseStat;
