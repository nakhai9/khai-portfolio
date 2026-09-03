import { useState } from "react";
import type { FC } from "react";

import { ChevronDown, ChevronUp } from "lucide-react";

import { Box, Button, Stack, Typography } from "@mui/material";

export type BaseBulletListProps = {
  items: string[];
  /** When set, only this many items show until the reader expands the list. */
  collapsedCount?: number;
  expandLabel?: string;
  collapseLabel?: string;
};

/** Unordered list with accent markers and an optional show-more toggle. */
const BaseBulletList: FC<BaseBulletListProps> = ({
  items,
  collapsedCount,
  expandLabel,
  collapseLabel,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isCollapsible =
    typeof collapsedCount === "number" && items.length > collapsedCount;
  const visibleItems =
    isCollapsible && !isExpanded ? items.slice(0, collapsedCount) : items;

  return (
    <Stack spacing={1.5}>
      <Stack component="ul" spacing={1} sx={{ listStyle: "none", m: 0, p: 0 }}>
        {visibleItems.map((item) => (
          <Stack
            key={item}
            component="li"
            direction="row"
            spacing={1.5}
            sx={{ alignItems: "flex-start" }}
          >
            <Box
              sx={{
                mt: "8px",
                flexShrink: 0,
                width: 6,
                height: 6,
                borderRadius: "2px",
                backgroundColor: "primary.main",
              }}
            />
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {item}
            </Typography>
          </Stack>
        ))}
      </Stack>

      {isCollapsible ? (
        <Box>
          <Button
            size="small"
            onClick={() => setIsExpanded((previous) => !previous)}
            endIcon={
              isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />
            }
            sx={{
              px: 0,
              color: "primary.main",
              "&:hover": { backgroundColor: "transparent", color: "primary.light" },
            }}
          >
            {isExpanded ? collapseLabel : expandLabel}
          </Button>
        </Box>
      ) : null}
    </Stack>
  );
};

export default BaseBulletList;
