import React from "react";
import classNames from "classnames";
import { DefaultTheme, makeStyles } from "@mui/styles";
import { cardHeaderStyle } from "theme/ts/components";

interface CardHeaderProps {
  className?: string,
  color: "warning" | "success" | "danger" | "info" | "primary" | "rose" | "dark";
  plain?: boolean;
  stats?: boolean;
  icon?: boolean;
  children?: React.ReactNode;
}
export default function CardHeader(props: CardHeaderProps) {
  const useStyles: Function = makeStyles(cardHeaderStyle as DefaultTheme);
  const classes = useStyles();
  const { className, children, color, plain, stats, icon, ...rest } = props;
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[color + "CardHeader"]]: color,
    [classes.cardHeaderPlain]: plain,
    [classes.cardHeaderStats]: stats,
    [classes.cardHeaderIcon]: icon,
    [className || 'Class']: className !== undefined,
  });
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
}
