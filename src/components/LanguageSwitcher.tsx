import { useState } from "react";
import type { FC, MouseEvent } from "react";

import { Check, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";

import { SUPPORTED_LANGUAGES } from "../i18n";

/** Switches the active i18n language; the choice is persisted by i18next. */
const LanguageSwitcher: FC = () => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const currentLanguage = i18n.resolvedLanguage ?? i18n.language;

  const handleOpen = (event: MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleSelect = (code: string) => {
    void i18n.changeLanguage(code);
    handleClose();
  };

  return (
    <>
      <Tooltip title={t("language.label")} arrow>
        <IconButton
          onClick={handleOpen}
          aria-label={t("language.label")}
          sx={{
            width: 44,
            height: 44,
            color: "text.primary",
            "&:hover": { color: "primary.main", backgroundColor: "secondary.light" },
          }}
        >
          <Languages size={20} />
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        transformOrigin={{ vertical: "bottom", horizontal: "center" }}
        slotProps={{
          paper: {
            sx: {
              mt: -1,
              backgroundColor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              backgroundImage: "none",
            },
          },
        }}
      >
        {SUPPORTED_LANGUAGES.map((language) => (
          <MenuItem
            key={language.code}
            selected={currentLanguage === language.code}
            onClick={() => handleSelect(language.code)}
            sx={{
              "&.Mui-selected": { backgroundColor: "secondary.light" },
              "&:hover": { color: "primary.main" },
            }}
          >
            <ListItemIcon sx={{ minWidth: 32, color: "primary.main" }}>
              {currentLanguage === language.code ? <Check size={16} /> : null}
            </ListItemIcon>
            <ListItemText primary={t(language.labelKey)} />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageSwitcher;
