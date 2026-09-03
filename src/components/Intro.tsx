import type { FC } from "react";

import { Download, Github, Linkedin, Mail, SquareCode, User } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Box, Stack, Typography } from "@mui/material";

import { APP_DATA } from "../data/data";
import { BaseButton, BaseIconLink } from "../shared/components";
import { downloadFile } from "../utils/common";

/** Hero section: role badge, name, summary and the primary calls to action. */
const Intro: FC = () => {
  const { t } = useTranslation();
  const { me } = APP_DATA;

  const handleDownloadCv = () => {
    downloadFile(me.resume, me.resumeFileName);
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        scrollMarginTop: 0,
      }}
    >
      <Stack spacing={3} sx={{ alignItems: "center", maxWidth: 800, py: 8 }}>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            alignItems: "center",
            px: 2.5,
            py: 0.75,
            borderRadius: 999,
            border: "1px solid",
            borderColor: "divider",
            color: "text.secondary",
          }}
        >
          <SquareCode size={16} />
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            {t("intro.role")}
          </Typography>
        </Stack>

        <Typography
          variant="h1"
          sx={{ fontSize: { xs: 36, md: 60 }, textAlign: "center" }}
        >
          {t("intro.greeting")}{" "}
          <Box component="span" sx={{ color: "primary.main" }}>
            {me.name}
          </Box>
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            textAlign: "center",
            fontSize: { xs: 15, md: 18 },
          }}
        >
          {t("intro.summary")}
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ width: { xs: "100%", sm: "auto" } }}
        >
          <BaseButton href="#contact" startIcon={<User size={18} />}>
            {t("intro.getInTouch")}
          </BaseButton>
          <BaseButton
            variant="outlined"
            onClick={handleDownloadCv}
            startIcon={<Download size={18} />}
          >
            {t("intro.downloadCv")}
          </BaseButton>
        </Stack>

        <Stack direction="row" spacing={1.5}>
          <BaseIconLink
            href={me.github}
            label={t("intro.socials.github")}
            external
          >
            <Github size={20} />
          </BaseIconLink>
          <BaseIconLink
            href={me.linkedin}
            label={t("intro.socials.linkedin")}
            external
          >
            <Linkedin size={20} />
          </BaseIconLink>
          <BaseIconLink
            href={`mailto:${me.email}`}
            label={t("intro.socials.email")}
          >
            <Mail size={20} />
          </BaseIconLink>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Intro;
