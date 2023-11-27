import React from "react";
import classNames from "classnames";
import { DefaultTheme, makeStyles } from "@mui/styles";
import { Snackbar as Snack, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { snackbarContentStyle } from "theme/ts/components";

interface SnackbarProps {
  message: React.ReactNode;
  color: "info" | "success" | "warning" | "danger" | "primary";
  close?: boolean;
  icon: any;
  place: "tl" | "tr" | "tc" | "br" | "bl" | "bc";
  open?: boolean;
  closeNotification: Function;
}
export default function Snackbar(props: SnackbarProps) {
  const useStyles: Function = makeStyles(snackbarContentStyle as DefaultTheme);
  const classes = useStyles();
  const { message, color, close, icon, place, open } = props;
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
        onClick={() => props.closeNotification()}
      >
        <Close className={classes.close} />
      </IconButton>,
    ];
  }
  return (
    <Snack
      anchorOrigin={{
        vertical: place.indexOf("t") === -1 ? "bottom" : "top",
        horizontal:
          place.indexOf("l") !== -1
            ? "left"
            : place.indexOf("c") !== -1
              ? "center"
              : "right",
      }}
      open={open}
      message={
        <div>
          {icon !== undefined ? <props.icon className={classes.icon} /> : null}
          <span className={messageClasses}>{message}</span>
        </div>
      }
      action={action}
      ContentProps={{
        classes: {
          root: classes.root + " " + classes[color],
          message: classes.message,
        },
      }}
    />
  );
}
