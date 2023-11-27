import React from "react";
import classNames from "classnames";
import { DefaultTheme, makeStyles } from "@mui/styles";
import { cardBodyStyle } from 'theme/ts/components';

interface CardBodyProps {
  className?: string,
  plain?: boolean;
  profile?: boolean;
  children?: React.ReactNode;
}
export default function CardBody(props: CardBodyProps) {
  const useStyles: Function = makeStyles(cardBodyStyle as DefaultTheme);
  const classes = useStyles();
  const { className, children, plain, profile, ...rest } = props;
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyProfile]: profile,
    [className || 'Class']: className !== undefined,
  });
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
}
