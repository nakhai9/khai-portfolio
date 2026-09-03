import type { FC } from "react";

import { Box, Typography } from "@mui/material";

import BaseSurface from "./BaseSurface";

export type BaseSkillTileProps = {
  name: string;
  icon: string;
};

/** Square tile showing a technology logo and its name. */
const BaseSkillTile: FC<BaseSkillTileProps> = ({ name, icon }) => {
  return (
    <BaseSurface
      interactive
      sx={{
        p: 2,
        width: 120,
        height: 120,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
      }}
    >
      <Box
        component="img"
        src={icon}
        alt={name}
        loading="lazy"
        sx={{ width: 48, height: 48, objectFit: "contain" }}
      />
      <Typography
        variant="caption"
        sx={{ color: "text.secondary", textAlign: "center", fontWeight: 600 }}
      >
        {name}
      </Typography>
    </BaseSurface>
  );
};

export default BaseSkillTile;
