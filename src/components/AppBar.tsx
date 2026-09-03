import { useEffect, useState } from "react";
import type { FC } from "react";

import { useTranslation } from "react-i18next";

import { Box, Divider, Stack } from "@mui/material";

import { APP_DATA } from "../data/data";
import { BaseIconLink } from "../shared/components";
import LanguageSwitcher from "./LanguageSwitcher";

const SECTION_IDS = APP_DATA.navLinks
  .map((link) => link.href.replace("#", ""))
  .filter((id, index, ids) => ids.indexOf(id) === index);

/** Floating navigation bar; highlights the section currently in view. */
const AppBar: FC = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      component="nav"
      sx={{
        position: "fixed",
        left: "50%",
        bottom: { xs: 16, md: 32 },
        transform: "translateX(-50%)",
        zIndex: (theme) => theme.zIndex.appBar,
        maxWidth: "calc(100vw - 24px)",
      }}
    >
      <Stack
        direction="row"
        spacing={0.5}
        sx={{
          alignItems: "center",
          p: 0.75,
          borderRadius: 999,
          border: "1px solid",
          borderColor: "divider",
          backgroundColor: "background.paper",
          boxShadow: 6,
          overflowX: "auto",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {APP_DATA.navLinks.map(({ id, labelKey, icon: Icon, href }) => (
          <BaseIconLink
            key={id}
            href={href}
            label={t(labelKey)}
            active={activeSection === href.replace("#", "") && id !== "scroll-to-top"}
            onClick={() => setActiveSection(href.replace("#", ""))}
          >
            <Icon size={20} />
          </BaseIconLink>
        ))}

        <Divider
          orientation="vertical"
          flexItem
          sx={{ mx: 0.5, borderColor: "divider" }}
        />
        <LanguageSwitcher />
      </Stack>
    </Box>
  );
};

export default AppBar;
