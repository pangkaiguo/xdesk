import React from "react";
import classNames from "classnames";
import { DefaultTheme, makeStyles } from "@mui/styles";
import { cardStyle } from "theme/ts/components";
interface CardProps {
  className?: string,
  plain?: boolean;
  profile?: boolean;
  chart?: boolean;
  children?: React.ReactNode;
}
export default function Card(props: CardProps) {
  const useStyles: Function = makeStyles(cardStyle as DefaultTheme);
  const classes = useStyles();
  const { className, children, plain, profile, chart, ...rest } = props;
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile,
    [classes.cardChart]: chart,
    [className || 'Class']: className !== undefined,
  });
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}
