import type { FC, ReactNode } from "react";

import { IconButton, Tooltip } from "@mui/material";

export type BaseIconLinkProps = {
  href: string;
  label: string;
  children: ReactNode;
  external?: boolean;
  onClick?: () => void;
  active?: boolean;
};

/** Circular icon link used by the nav bar and the social links. */
const BaseIconLink: FC<BaseIconLinkProps> = ({
  href,
  label,
  children,
  external = false,
  onClick,
  active = false,
}) => {
  return (
    <Tooltip title={label} arrow>
      <IconButton
        component="a"
        href={href}
        aria-label={label}
        onClick={onClick}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : null)}
        sx={{
          width: 44,
          height: 44,
          color: active ? "primary.contrastText" : "text.primary",
          backgroundColor: active ? "primary.main" : "transparent",
          border: "1px solid",
          borderColor: active ? "primary.main" : "transparent",
          transition: "all .25s ease",
          "&:hover": {
            backgroundColor: active ? "primary.light" : "secondary.light",
            color: active ? "primary.contrastText" : "primary.main",
            transform: "translateY(-2px)",
          },
        }}
      >
        {children}
      </IconButton>
    </Tooltip>
  );
};

export default BaseIconLink;
