import type { FC } from "react";

import { Chip } from "@mui/material";

export type BaseTagProps = {
  label: string;
  /** `solid` for the accent fill, `outline` for the low-emphasis variant. */
  variant?: "solid" | "outline";
};

/** Small pill used for technologies, team size and workplace badges. */
const BaseTag: FC<BaseTagProps> = ({ label, variant = "solid" }) => {
  const isSolid = variant === "solid";

  return (
    <Chip
      label={label}
      size="small"
      sx={{
        borderRadius: 999,
        backgroundColor: isSolid ? "primary.main" : "transparent",
        color: isSolid ? "primary.contrastText" : "text.secondary",
        border: "1px solid",
        borderColor: isSolid ? "primary.main" : "divider",
      }}
    />
  );
};

export default BaseTag;
