import React from "react";
import classNames from "classnames";
import { DefaultTheme, makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import { buttonStyle } from "theme/ts/components";

export enum CustomButtonColors {
  primary = "primary",
  info = "info",
  success = "success",
  warning = "warning",
  danger = "danger",
  rose = "rose",
  white = "white",
  transparent = "transparent"
}
export enum CustomButtonSize {
  sm = "sm",
  lg = "lg"
}

interface RegularButtonProps {
  color?: string;
  size?: string;
  simple?: boolean;
  round?: boolean;
  disabled?: boolean;
  block?: boolean;
  link?: boolean;
  justIcon?: boolean;
  className?: string;
  // use this to pass the classes props from Material-UI
  muiClasses?: object;
  children?: any;
  fullWidth?: boolean;
  onClick?: VoidFunction;
}

export default function RegularButton(props: RegularButtonProps) {
  const useStyles: Function = makeStyles(buttonStyle as DefaultTheme);
  const classes = useStyles();
  const {
    color,
    round,
    children,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    muiClasses,
    ...rest
  } = props;
  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size || 'size']]: size,
    [classes[color || 'color']]: color,
    [classes.round]: round,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className || 'Class']: className,
  });
  return (
    <Button {...rest} classes={{ ...muiClasses, root: btnClasses }}>
      {children}
    </Button>
  );
}
