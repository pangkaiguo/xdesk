import React from "react";
import { DefaultTheme, makeStyles } from "@mui/styles";
import { ListItem, List, Link } from "@mui/material";
import { footerStyle } from "theme/ts/components";

export default function Footer() {
  const useStyles: Function = makeStyles(footerStyle as DefaultTheme);
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link href="/admin/dashboard" className={classes.block}>
                概览页
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link href="http://www.xsky.com" className={classes.block}>
                公司首页
              </Link>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            Copyright
            &copy; {new Date().getFullYear()}{" "}
            <Link
              href="http://www.xsky.com"
              target="_blank"
              className={classes.a} rel="noreferrer"
            >
              北京星辰天合科技股份有限公司
            </Link>
            &nbsp;版权所有
          </span>
        </p>
      </div>
    </footer>
  );
}
