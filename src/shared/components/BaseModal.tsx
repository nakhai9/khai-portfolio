import type { FC, ReactNode } from "react";

import { X } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";

export type BaseModalProps = {
  title: string;
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg";
};

/** Dialog shell with the app surface, border and close affordance. */
const BaseModal: FC<BaseModalProps> = ({
  title,
  open,
  onClose,
  children,
  maxWidth = "sm",
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth={maxWidth}
      slotProps={{
        paper: {
          sx: {
            backgroundColor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            backgroundImage: "none",
          },
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Typography variant="h6" component="span">
          {title}
        </Typography>
        <IconButton
          onClick={onClose}
          aria-label="close"
          sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}
        >
          <X size={20} />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
};

export default BaseModal;
