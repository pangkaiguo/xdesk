import React from "react";
import classNames from "classnames";
import { DefaultTheme, makeStyles } from "@mui/styles";
import { Snackbar as Snack, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { snackbarContentStyle } from "theme/ts/components";

interface SnackbarContentProps {
  message: React.ReactNode,
  color: "info" | "success" | "warning" | "danger" | "primary";
  close?: boolean;
  icon?: any;
};

export default function SnackbarContent(props: SnackbarContentProps) {
  const useStyles: Function = makeStyles(snackbarContentStyle as DefaultTheme);
  const classes = useStyles();
  const { message, color, close, icon } = props;
  var action: Array<any> = [];
  const messageClasses = classNames({
    [classes.iconMessage]: icon !== undefined,
  });
  if (close !== undefined) {
    action = [
      <IconButton
        className={classes.iconButton}
        key="close"
        aria-label="Close"
        color="inherit"
      >
        <Close className={classes.close} />
      </IconButton>,
    ];
  }
  return (
    <Snack
      message={
        <div>
          {icon !== undefined ? <props.icon className={classes.icon} /> : null}
          <span className={messageClasses}>{message}</span>
        </div>
      }
      classes={{
        // TODO fix bug
        root: classes.root + " " + classes[color] + classes.message,
      }}
      action={action}
    />
  );
}

