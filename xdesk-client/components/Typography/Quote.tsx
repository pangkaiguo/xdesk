import React from "react";
import PropTypes from "prop-types";
import { DefaultTheme, makeStyles } from "@mui/styles";
import { typographyStyle } from "theme/ts/components";

interface QuoteProps {
  text?: React.ReactNode;
  author?: React.ReactNode;
}
export default function Quote(props: QuoteProps) {
  const useStyles: Function = makeStyles(typographyStyle as DefaultTheme);
  const classes = useStyles();
  const { text, author } = props;
  return (
    <blockquote className={classes.defaultFontStyle + " " + classes.quote}>
      <p className={classes.quoteText}>{text}</p>
      <small className={classes.quoteAuthor}>{author}</small>
    </blockquote>
  );
}

