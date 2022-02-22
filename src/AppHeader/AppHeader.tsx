import { ReactNode } from "react";
import { AppBar, Typography } from "@/components";
import { ThemeButton } from "../ThemeButton";

interface AppHeaderProps {
  title: ReactNode;
}

export const AppHeader = ({ title }: AppHeaderProps) => {
  return (
    <AppBar>
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        flexGrow={1}
        minWidth={0}
        noWrap
      >
        {title}
      </Typography>
      {/* Light/dark mode toggle */}
      <ThemeButton edge="end" />
    </AppBar>
  );
};
