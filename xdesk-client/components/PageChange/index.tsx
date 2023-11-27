import React from "react";
import { DefaultTheme, makeStyles } from "@mui/styles";
import { CircularProgress } from "@mui/material";
import { infoColor, title } from "theme/ts/default";

const styles = {
  progress: {
    color: infoColor,
    width: "6rem !important",
    height: "6rem !important",
  },
  wrapperDiv: {
    margin: "100px auto",
    padding: "0px",
    maxWidth: "360px",
    textAlign: "center",
    position: "relative",
    zIndex: "10000",
    top: "0",
  },
  iconWrapper: {
    display: "block",
  },
  title: {
    ...title,
    color: "#FFFFFF",
  },
};

export default function PageChange(props: any) {
  const useStyles: Function = makeStyles(styles as DefaultTheme);
  const classes = useStyles();
  return (
    <div className="page-loading">
      <div className={classes.wrapperDiv}>
        <div className={classes.iconWrapper}>
          <CircularProgress className={classes.progress} />
        </div>
        <h4 className={classes.title}>
          页面加载中: {props.path}...
        </h4>
      </div>
    </div>
  );
}
