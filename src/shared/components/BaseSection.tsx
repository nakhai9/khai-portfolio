import type { FC, ReactNode } from "react";

import { Box, Stack, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";

export type BaseSectionProps = {
  /** Anchor id used by the navigation bar. */
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  sx?: SxProps<Theme>;
};

/** Page section with a centered heading and an accent underline. */
const BaseSection: FC<BaseSectionProps> = ({
  id,
  title,
  subtitle,
  children,
  sx,
}) => {
  return (
    <Box component="section" id={id} sx={{ scrollMarginTop: 96, py: 5, ...sx }}>
      <Stack spacing={1.5} sx={{ alignItems: "center", mb: 5 }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: 28, md: 40 },
            color: "primary.main",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            width: 64,
            height: 4,
            borderRadius: 2,
            backgroundColor: "primary.main",
          }}
        />
        {subtitle ? (
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", textAlign: "center", maxWidth: 640 }}
          >
            {subtitle}
          </Typography>
        ) : null}
      </Stack>
      {children}
    </Box>
  );
};

export default BaseSection;
