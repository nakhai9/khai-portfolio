/**
 * TypeScript mirror of the CSS custom properties declared in `src/index.css`.
 *
 * MUI needs real colour values (it computes contrast text and alpha channels),
 * and those helpers cannot parse `var(...)`. Keep both files in sync - the CSS
 * `:root` block is the documentation, this object is what MUI consumes.
 */
export const PALETTE = {
  mist: "#E2E1EB",
  silver: "#AAAAAE",
  taupe: "#7F7265",
  ochre: "#fb923c",
  espresso: "#322D27",
} as const;

export const COLORS = {
  background: PALETTE.espresso,
  surface: "#433C35",
  surfaceRaised: "#4F473F",
  border: "#5C5349",
  divider: PALETTE.taupe,

  primary: PALETTE.ochre,
  primaryLight: "#C79866",
  primaryDark: "#A3733B",
  onPrimary: PALETTE.espresso,

  textPrimary: PALETTE.mist,
  textSecondary: PALETTE.silver,
  textDisabled: "#868586",
} as const;

export type AppColors = typeof COLORS;
