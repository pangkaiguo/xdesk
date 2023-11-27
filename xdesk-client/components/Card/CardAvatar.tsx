import React from "react";
import classNames from "classnames";
import { DefaultTheme, makeStyles } from "@mui/styles";
import { cardAvatarStyle } from 'theme/ts/components';

interface CardAvatarProps {
  children?: React.ReactNode;
  className?: string;
  profile?: boolean;
  plain?: boolean;
}

export default function CardAvatar(props: CardAvatarProps) {
  const useStyles: Function = makeStyles(cardAvatarStyle as DefaultTheme);
  const classes = useStyles();
  const { children, className, plain, profile, ...rest } = props;
  const cardAvatarClasses = classNames({
    [classes.cardAvatar]: true,
    [classes.cardAvatarProfile]: profile,
    [classes.cardAvatarPlain]: plain,
    [className || 'Class']: className !== undefined,
  });
  return (
    <div className={cardAvatarClasses} {...rest}>
      {children}
    </div>
  );
}
