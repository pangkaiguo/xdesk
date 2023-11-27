import React from "react";
import { DefaultTheme, makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

const styles = {
  grid: {
    margin: "0 -15px !important",
    width: "unset",
  },
};

interface GridContainerProps {
  children?: any;
  justify?: string;
}

export default function GridContainer(props: GridContainerProps) {
  const useStyles: Function = makeStyles(styles as DefaultTheme);
  const classes = useStyles();
  const { children, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
}
