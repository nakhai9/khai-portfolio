import type { FC, ReactNode } from "react";

import { Box } from "@mui/material";

export type BaseTimelineItemProps = {
  /** Rendered inside the rail marker (initials, icon, ...). */
  marker?: ReactNode;
  /** Emphasises the marker - used for the current position. */
  highlighted?: boolean;
  /** Hides the connecting rail below the marker. */
  isLast?: boolean;
  children: ReactNode;
};

const MARKER_SIZE = 48;
const RAIL_WIDTH = 2;

/** One row of a vertical timeline: a marker on the rail plus free-form content. */
const BaseTimelineItem: FC<BaseTimelineItemProps> = ({
  marker,
  highlighted = false,
  isLast = false,
  children,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        gap: { xs: 2, md: 3 },
        pb: isLast ? 0 : { xs: 3, md: 4 },
      }}
    >
      {!isLast ? (
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            top: MARKER_SIZE,
            bottom: 0,
            left: MARKER_SIZE / 2 - RAIL_WIDTH / 2,
            width: RAIL_WIDTH,
            backgroundColor: "divider",
          }}
        />
      ) : null}

      <Box
        sx={{
          flexShrink: 0,
          width: MARKER_SIZE,
          height: MARKER_SIZE,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          border: "2px solid",
          borderColor: highlighted ? "primary.main" : "divider",
          backgroundColor: highlighted ? "primary.main" : "secondary.light",
          color: highlighted ? "primary.contrastText" : "primary.main",
          fontWeight: 700,
          fontSize: 14,
          letterSpacing: 0.5,
        }}
      >
        {marker}
      </Box>

      <Box sx={{ flexGrow: 1, minWidth: 0 }}>{children}</Box>
    </Box>
  );
};

export default BaseTimelineItem;
