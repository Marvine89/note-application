import React from "react";
import { Fab } from "@material-ui/core";
import { FloatingButtonBlock } from "./styles";

interface FloatingButtonProps {
  children: any;
  title: string;
  label: string;
  placement: "left" | "right" | "bottom" | "top";
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({ title, label, placement, children }) => {
  return (
    <FloatingButtonBlock title={title} aria-label={label} placement={placement}>
      <Fab color="primary" aria-label={label}>
        {children}
      </Fab>
    </FloatingButtonBlock>
  );
};
