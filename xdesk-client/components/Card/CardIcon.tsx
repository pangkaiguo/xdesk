import React from "react";
import classNames from "classnames";
import { DefaultTheme, makeStyles } from "@mui/styles";
import { cardIconStyle } from "theme/ts/components";
interface CardIconProps {
  className?: string;
  color: "warning" | "success" | "danger" | "info" | "primary" | "rose" | "dark";
  children?: React.ReactNode;
}
export default function CardIcon(props: CardIconProps) {
  const useStyles: Function = makeStyles(cardIconStyle as DefaultTheme);
  const classes = useStyles();
  const { className, children, color, ...rest } = props;
  const cardIconClasses = classNames({
    [classes.cardIcon]: true,
    [classes[color + "CardHeader"]]: color,
    [className || "ClassName"]: className !== undefined,
  });
  return (
    <div className={cardIconClasses} {...rest}>
      {children}
    </div>
  );
}
