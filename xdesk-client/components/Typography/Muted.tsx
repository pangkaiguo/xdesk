import React from "react";
import { DefaultTheme, makeStyles } from "@mui/styles";
import { typographyStyle } from "theme/ts/components";

interface MutedProps {
  children?: React.ReactNode;
}
export default function Muted(props: MutedProps) {
  const useStyles: Function = makeStyles(typographyStyle as DefaultTheme);
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.mutedText}>
      {children}
    </div>
  );
}
