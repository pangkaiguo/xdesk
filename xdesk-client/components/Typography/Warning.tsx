import React from "react";
import { DefaultTheme, makeStyles } from "@mui/styles";
import { typographyStyle } from "theme/ts/components";

interface WarningProps {
  children?: React.ReactNode;
}
export default function Warning(props: WarningProps) {
  const useStyles: Function = makeStyles(typographyStyle as DefaultTheme);
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.warningText}>
      {children}
    </div>
  );
}
