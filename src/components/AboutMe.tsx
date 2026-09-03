import type { FC } from "react";

import { useTranslation } from "react-i18next";

import { Box, Stack, Typography } from "@mui/material";

import { APP_DATA } from "../data/data";
import { BaseSection, BaseStat } from "../shared/components";

/** Avatar, personal blurb and headline numbers. */
const AboutMe: FC = () => {
  const { t } = useTranslation();
  const { me, stats } = APP_DATA;

  return (
    <BaseSection id="about-me" title={t("about.title")}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 4, md: 6 }}
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            p: 1,
            flexShrink: 0,
            width: 240,
            height: 240,
            borderRadius: 3,
            border: "2px solid",
            borderColor: "primary.main",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={me.avatar}
            alt={t("about.avatarAlt")}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 2,
              display: "block",
            }}
          />
        </Box>

        <Stack spacing={3} sx={{ alignItems: { xs: "center", md: "flex-start" } }}>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: 520,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {t("about.description")}
          </Typography>

          <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: "wrap" }}>
            <BaseStat value={stats.years} label={t("about.stats.years")} />
            <BaseStat value={stats.companies} label={t("about.stats.companies")} />
            <BaseStat
              value={stats.technologies}
              label={t("about.stats.technologies")}
            />
          </Stack>
        </Stack>
      </Stack>
    </BaseSection>
  );
};

export default AboutMe;
