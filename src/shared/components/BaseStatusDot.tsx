import type { FC } from "react";

import { Box, Stack, Typography } from "@mui/material";

export type BaseStatusDotProps = {
  label: string;
};

/** Pulsing accent dot with a caption - marks an ongoing item. */
const BaseStatusDot: FC<BaseStatusDotProps> = ({ label }) => {
  return (
    <Stack
      direction="row"
      spacing={0.75}
      sx={{
        alignItems: "center",
        px: 1.25,
        py: 0.25,
        borderRadius: 999,
        border: "1px solid",
        borderColor: "primary.main",
        color: "primary.main",
      }}
    >
      <Box
        sx={{
          width: 7,
          height: 7,
          borderRadius: "50%",
          backgroundColor: "primary.main",
          animation: "baseStatusPulse 1.8s ease-in-out infinite",
          "@keyframes baseStatusPulse": {
            "0%, 100%": { opacity: 1, transform: "scale(1)" },
            "50%": { opacity: 0.35, transform: "scale(0.8)" },
          },
        }}
      />
      <Typography variant="caption" sx={{ fontWeight: 700 }}>
        {label}
      </Typography>
    </Stack>
  );
};

export default BaseStatusDot;
