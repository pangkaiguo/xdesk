import React from "react";
import classNames from "classnames";
import lodash from "lodash";
import { DefaultTheme, makeStyles } from "@mui/styles";
import { MenuItem, MenuList, Grow, ClickAwayListener, Hidden, Divider, Popper, Paper, createTheme } from "@mui/material";
import { Person, Notifications, Dashboard, Search } from "@mui/icons-material";
import CustomInput from "components/CustomInput";
import Button, { CustomButtonColors } from "components/CustomButtons";
import useWindowSize from "components/Hooks/useWindowSize";
import { headerLinksStyle } from "theme/ts/components";
import { userService } from "services/user.service";

export default function AdminNavbarLinks() {
  const theme = createTheme();
  const size = useWindowSize();
  const useStyles: Function = makeStyles(headerLinksStyle(theme) as DefaultTheme);
  const classes = useStyles();
  const [openNotification, setOpenNotification] = React.useState(null);
  const [openProfile, setOpenProfile] = React.useState(null);
  const handleClickNotification = (event: any) => {
    if (openNotification && lodash.includes(openNotification, event.target)) {
      setOpenNotification(null);
    } else {
      setOpenNotification(event.currentTarget);
    }
  };
  const handleCloseNotification = () => {
    setOpenNotification(null);
  };
  const handleClickProfile = (event: any) => {
    if (openProfile && lodash.includes(openProfile, event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const handleCloseProfile = () => {
    setOpenProfile(null);
  };
  const handleLogout = () => {
    handleCloseProfile();
    userService.logout();
  };
  return (
    <div>
      <div className={classes.searchWrapper}>
        <CustomInput
          formControlProps={{
            className: classes.margin + " " + classes.search,
          }}
          inputProps={{
            placeholder: "搜索...",
            inputProps: {
              "aria-label": "Search",
            },
          }}
        />
        <Button color={CustomButtonColors.white} aria-label="edit" justIcon round>
          <Search />
        </Button>
      </div>
      <Button
        color={size.width > 959 ? CustomButtonColors.transparent : CustomButtonColors.white}
        justIcon={size.width > 959}
        simple={size.width <= 959}
        aria-label="Dashboard"
        className={classes.buttonLink}
      >
        <Dashboard className={classes.icons} />
        <Hidden mdUp implementation="css">
          <p className={classes.linkText}>概览</p>
        </Hidden>
      </Button>
      <div className={classes.manager}>
        <Button
          color={size.width > 959 ? CustomButtonColors.transparent : CustomButtonColors.white}
          justIcon={size.width > 959}
          simple={size.width <= 959}
          aria-owns={openNotification ? "notification-menu-list-grow" : null}
          aria-haspopup="true"
          className={classes.buttonLink}
        >
          <div onClick={handleClickNotification}>
            <Notifications className={classes.icons} />
            <span className={classes.notifications}>5</span>
            <Hidden mdUp implementation="css">
              <p onClick={handleCloseNotification} className={classes.linkText}>
                消息通知
              </p>
            </Hidden>
          </div>
        </Button>
        <Popper
          open={Boolean(openNotification)}
          anchorEl={openNotification}
          transition
          disablePortal
          className={
            classNames({ [classes.popperClose]: !openNotification }) +
            " " +
            classes.popperNav
          }
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="notification-menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseNotification}>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={handleCloseNotification}
                      className={classes.dropdownItem}
                    >
                      解胜利回复了您的消息
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseNotification}
                      className={classes.dropdownItem}
                    >
                      您有5个新的任务单
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseNotification}
                      className={classes.dropdownItem}
                    >
                      更多新消息...
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
      <div className={classes.manager}>
        <Button
          color={size.width > 959 ? CustomButtonColors.transparent : CustomButtonColors.white}
          justIcon={size.width > 959}
          simple={size.width <= 959}
          aria-owns={openProfile ? "profile-menu-list-grow" : null}
          aria-haspopup="true"
          className={classes.buttonLink}
        >
          <div onClick={handleClickProfile}>
            <Person className={classes.icons} />
            <Hidden mdUp implementation="css">
              <p className={classes.linkText}>用户信息</p>
            </Hidden>
          </div>
        </Button>
        <Popper
          open={Boolean(openProfile)}
          anchorEl={openProfile}
          transition
          disablePortal
          className={
            classNames({ [classes.popperClose]: !openProfile }) +
            " " +
            classes.popperNav
          }
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="profile-menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseProfile}>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={handleCloseProfile}
                      className={classes.dropdownItem}
                    >
                      用户信息
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseProfile}
                      className={classes.dropdownItem}
                    >
                      设置
                    </MenuItem>
                    <Divider light />
                    <MenuItem
                      onClick={handleLogout}
                      className={classes.dropdownItem}
                    >
                      退出
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
