import { alpha, createTheme } from "@mui/material/styles";

import { COLORS } from "./colors";

const FONT_FAMILY = '"DM Sans", system-ui, -apple-system, "Segoe UI", sans-serif';

export const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "dark",
    primary: {
      main: COLORS.primary,
      light: COLORS.primaryLight,
      dark: COLORS.primaryDark,
      contrastText: COLORS.onPrimary,
    },
    secondary: {
      main: COLORS.divider,
      light: COLORS.surfaceRaised,
      dark: COLORS.surface,
      contrastText: COLORS.textPrimary,
    },
    background: {
      default: COLORS.background,
      paper: COLORS.surface,
    },
    text: {
      primary: COLORS.textPrimary,
      secondary: COLORS.textSecondary,
      disabled: COLORS.textDisabled,
    },
    divider: COLORS.border,
    // The palette has no dedicated status hues, so every state re-uses the
    // brand accent instead of introducing off-system colours.
    error: { main: COLORS.primaryDark, contrastText: COLORS.textPrimary },
    warning: { main: COLORS.primary, contrastText: COLORS.onPrimary },
    info: { main: COLORS.primaryLight, contrastText: COLORS.onPrimary },
    success: { main: COLORS.primary, contrastText: COLORS.onPrimary },
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: FONT_FAMILY,
    h1: { fontWeight: 700, lineHeight: 1.15 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 700 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: COLORS.background,
          color: COLORS.textPrimary,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: "none" },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 10, paddingInline: 20 },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 600 },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(COLORS.background, 0.35),
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: COLORS.border,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: COLORS.divider,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: COLORS.primary,
            borderWidth: 2,
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: COLORS.surfaceRaised,
          color: COLORS.textPrimary,
          fontSize: 12,
        },
        arrow: { color: COLORS.surfaceRaised },
      },
    },
    MuiLink: {
      defaultProps: { underline: "hover" },
      styleOverrides: {
        root: { color: COLORS.primary },
      },
    },
  },
});
