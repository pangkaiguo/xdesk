import React, { MouseEventHandler } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import { DefaultTheme, makeStyles } from "@mui/styles";
import { AppBar, Toolbar, IconButton, Hidden } from "@mui/material";
import { Menu } from "@mui/icons-material";
import AdminNavbarLinks from "./AdminNavbarLinks";
import Button, { CustomButtonColors } from "../CustomButtons";
import { headerStyle } from 'theme/ts/components';

interface HeaderProps {
  color: "primary" | "info" | "success" | "warning" | "danger";
  handleDrawerToggle: MouseEventHandler<HTMLButtonElement>;
  routes: Array<{
    path: string,
    name: string,
    icon: StaticImageData,
    layout: string,
  }>;
}
export default function Header(props: HeaderProps) {
  // used for checking current route
  const router = useRouter();
  // create styles for this component
  const useStyles: Function = makeStyles(headerStyle as DefaultTheme);
  const classes = useStyles();
  function makeBrand() {
    var name = "XDESK Material Dashboard";
    props.routes.map((prop: { layout: any; path: any; name: string; }) => {
      if (router.route.indexOf(prop.layout + prop.path) !== -1) {
        name = prop.name;
      }
      return null;
    });
    return name;
  }
  const { color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color,
  });
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          {/* Here we create navbar brand, based on route name */}
          <Button color={CustomButtonColors.transparent} className={classes.title}>
            {makeBrand()}
          </Button>
        </div>
        <Hidden smDown implementation="css">
          <AdminNavbarLinks />
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
