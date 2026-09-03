import type { FC } from "react";

import { useTranslation } from "react-i18next";

import { Divider, Stack, Typography } from "@mui/material";

import { APP_DATA } from "../data/data";

/** Copyright line closing the page. */
const Footer: FC = () => {
  const { t } = useTranslation();

  return (
    <Stack component="footer" spacing={2} sx={{ pb: { xs: 12, md: 14 } }}>
      <Divider sx={{ borderColor: "divider" }} />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1}
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {t("footer.rights", {
            name: APP_DATA.me.name,
            year: new Date().getFullYear(),
          })}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.disabled" }}>
          {t("footer.builtWith")}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
