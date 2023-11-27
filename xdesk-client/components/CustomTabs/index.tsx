import React from "react";
import classNames from "classnames";
import { DefaultTheme, makeStyles } from "@mui/styles";
import { Tabs, Tab } from "@mui/material";
import Card from "../Card";
import CardBody from "../Card/CardBody";
import CardHeader from "../Card/CardHeader";
import { customTabsStyle } from "theme/ts/components";

type tabsProps = Array<{
  tabName: string;
  tabIcon?: object;
  tabContent: React.ReactNode;
}>
interface CustomTabsProps {
  headerColor: "warning" | "success" | "danger" | "info" | "primary" | "rose" | "dark";
  title?: string;
  tabs: tabsProps;
  plainTabs?: boolean;
}

export default function CustomTabs(props: CustomTabsProps) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: any, val: any) => {
    setValue(val);
  };
  const useStyles: Function = makeStyles(customTabsStyle as DefaultTheme);
  const classes = useStyles();
  const { headerColor, plainTabs, tabs, title } = props;
  const cardTitle = classNames({
    [classes.cardTitle]: true,
  });
  return (
    <Card plain={plainTabs}>
      <CardHeader color={headerColor} plain={plainTabs}>
        {title !== undefined ? <div className={cardTitle}>{title}</div> : null}
        <Tabs
          value={value}
          onChange={handleChange}
          classes={{
            root: classes.tabsRoot,
            indicator: classes.displayNone,
            scrollButtons: classes.displayNone,
          }}
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabs.map((prop: any, key: any) => {
            var icon = {};
            if (prop.tabIcon) {
              icon = {
                icon: <prop.tabIcon />,
              };
            }
            return (
              <Tab
                classes={{
                  root: classes.tabRootButton,
                  selected: classes.tabSelected,
                  wrapped: classes.tabWrapper,
                }}
                key={key}
                label={prop.tabName}
                {...icon}
              />
            );
          })}
        </Tabs>
      </CardHeader>
      <CardBody>
        {tabs.map((prop: any, key: any) => {
          if (key === value) {
            return <div key={key}>{prop.tabContent}</div>;
          }
          return null;
        })}
      </CardBody>
    </Card>
  );
}
