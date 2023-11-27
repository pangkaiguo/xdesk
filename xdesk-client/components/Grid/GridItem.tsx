import React from "react";
import { DefaultTheme, makeStyles } from "@mui/styles";
import { Grid, GridProps } from "@mui/material";

const styles = {
  grid: {
    padding: "0 15px !important",
  },
};
export default function GridItem(props: GridProps) {
  const useStyles: Function = makeStyles(styles as DefaultTheme);
  const classes = useStyles();
  const { children, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
}
