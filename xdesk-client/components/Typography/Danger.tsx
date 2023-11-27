import React from "react";
import { DefaultTheme, makeStyles } from "@mui/styles";
import { typographyStyle } from "theme/ts/components";

interface DangerProps {
  children?: React.ReactNode;
}
export default function Danger(props: DangerProps) {
  const useStyles: Function = makeStyles(typographyStyle as DefaultTheme);
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.dangerText}>
      {children}
    </div>
  );
}
