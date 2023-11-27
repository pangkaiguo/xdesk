import React from "react";
import classNames from "classnames";
import { DefaultTheme, makeStyles } from "@mui/styles";
import { cardFooterStyle } from 'theme/ts/components';

interface CardFooterProps {
  className?: string;
  plain?: boolean;
  profile?: boolean;
  stats?: boolean;
  chart?: boolean;
  children?: React.ReactNode;
}
export default function CardFooter(props: CardFooterProps) {
  const useStyles: Function = makeStyles(cardFooterStyle as DefaultTheme);
  const classes = useStyles();
  const { className, children, plain, profile, stats, chart, ...rest } = props;
  const cardFooterClasses = classNames({
    [classes.cardFooter]: true,
    [classes.cardFooterPlain]: plain,
    [classes.cardFooterProfile]: profile,
    [classes.cardFooterStats]: stats,
    [classes.cardFooterChart]: chart,
    [className || 'Class']: className !== undefined,
  });
  return (
    <div className={cardFooterClasses} {...rest}>
      {children}
    </div>
  );
}
