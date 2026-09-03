import type { FC } from "react";

import { ExternalLink } from "lucide-react";

import { Box, Stack, Typography } from "@mui/material";

import BaseButton from "./BaseButton";
import BaseSurface from "./BaseSurface";
import BaseTag from "./BaseTag";

export type BaseProjectCardProps = {
  name: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  imageAlt?: string;
  launchUrl?: string;
  launchLabel: string;
};

const IMAGE_HEIGHT = 176;

/** Presentational project card - receives everything it renders through props. */
const BaseProjectCard: FC<BaseProjectCardProps> = ({
  name,
  description,
  technologies,
  imageUrl,
  imageAlt,
  launchUrl,
  launchLabel,
}) => {
  return (
    <BaseSurface
      interactive
      sx={{ p: 0, overflow: "hidden", height: "100%", display: "flex" }}
    >
      <Stack sx={{ width: "100%" }}>
        {imageUrl ? (
          <Box
            component="img"
            src={imageUrl}
            alt={imageAlt ?? name}
            loading="lazy"
            sx={{
              width: "100%",
              height: IMAGE_HEIGHT,
              objectFit: "cover",
              borderBottom: "1px solid",
              borderColor: "divider",
            }}
          />
        ) : (
          /* Keeps the card the same height as its siblings until a
             screenshot is available. */
          <Box
            aria-hidden
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: IMAGE_HEIGHT,
              backgroundColor: "secondary.light",
              borderBottom: "1px solid",
              borderColor: "divider",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "primary.main",
                opacity: 0.5,
                letterSpacing: 4,
                textTransform: "uppercase",
              }}
            >
              {name.slice(0, 2)}
            </Typography>
          </Box>
        )}

        <Stack spacing={1.5} sx={{ p: 3, flexGrow: 1 }}>
          <Typography variant="h6">{name}</Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", flexGrow: 1 }}
          >
            {description}
          </Typography>

          <Stack direction="row" useFlexGap spacing={1} sx={{ flexWrap: "wrap" }}>
            {technologies.map((technology) => (
              <BaseTag key={technology} label={technology} variant="outline" />
            ))}
          </Stack>

          {launchUrl ? (
            <Box sx={{ pt: 1 }}>
              <BaseButton
                variant="outlined"
                size="small"
                href={launchUrl}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<ExternalLink size={16} />}
              >
                {launchLabel}
              </BaseButton>
            </Box>
          ) : null}
        </Stack>
      </Stack>
    </BaseSurface>
  );
};

export default BaseProjectCard;
