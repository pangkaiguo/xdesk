import React from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import { DefaultTheme, makeStyles } from "@mui/styles";
import { Drawer, Hidden, List, ListItem, ListItemText, Icon, Link as MLink } from "@mui/material";
import AdminNavbarLinks from "../Navbars/AdminNavbarLinks";
import { sidebarStyle } from "theme/ts/components";
import Link from 'next/link';

interface SidebarProps {
  handleDrawerToggle?: VoidFunction;
  bgColor?: "white" | "purple" | "blue" | "green" | "orange" | "red";
  logo?: StaticImageData;
  image?: StaticImageData;
  logoText?: string;
  routes?: Array<object>;
  open?: boolean;
  color?: string;
}

export default function Sidebar(props: SidebarProps) {
  // used for checking current route
  const router = useRouter();
  // creates styles for this component
  const useStyles: Function = makeStyles(sidebarStyle as DefaultTheme);
  const classes = useStyles();
  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName: string) {
    return router.route.indexOf(routeName) > -1 ? true : false;
  }
  const { color = '', logo, image, logoText, routes = [] } = props;
  const links = (
    <List className={classes.list}>
      {routes.map((prop: any, key: any) => {
        let activePro = " ";
        const listItemClasses = classNames({
          [" " + classes[color]]: activeRoute(prop.layout + prop.path),
        });
        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path)
        });
        return (
          <Link href={prop.layout + prop.path} key={key} passHref={true}>
            <MLink className={activePro + classes.item}>
              <ListItem button className={classes.itemLink + listItemClasses}>
                {typeof prop.icon === "string" ? (
                  <Icon
                    className={classNames(classes.itemIcon, whiteFontClasses)}
                  >
                    {prop.icon}
                  </Icon>
                ) : (
                  <prop.icon
                    className={classNames(classes.itemIcon, whiteFontClasses)}
                  />
                )}
                <ListItemText
                  primary={prop.name}
                  className={classNames(classes.itemText, whiteFontClasses)}
                  disableTypography={true}
                />
              </ListItem>
            </MLink>
          </Link>
        );
      })}
    </List>
  );
  const brand = (
    <div className={classes.logo}>
      <MLink
        href="/admin"
        className={classNames(classes.logoLink)}
        target="_self"
      >
        <div className={classes.logoImage}>
          <img src={logo?.src} alt="logo" className={classes.img} />
        </div>
        {logoText}
      </MLink>
    </div>
  );
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="right"
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper),
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            <AdminNavbarLinks />
            {links}
          </div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor="left"
          variant="permanent"
          open
          classes={{ paper: classNames(classes.drawerPaper) }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : null}
        </Drawer>
      </Hidden>
    </div>
  );
}
