import React from "react";
import { DefaultTheme, makeStyles } from "@mui/styles";
import { typographyStyle } from "theme/ts/components";

interface SuccessProps {
  children?: React.ReactNode;
}
export default function Success(props: SuccessProps) {
  const useStyles: Function = makeStyles(typographyStyle as DefaultTheme);
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.successText}>
      {children}
    </div>
  );
}
