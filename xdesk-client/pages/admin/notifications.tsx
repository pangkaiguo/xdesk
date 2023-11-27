import React from "react";
import { DefaultTheme, makeStyles } from "@mui/styles";
import { AddAlert } from "@mui/icons-material";
import Admin from "layouts/Admin";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import Button, { CustomButtonColors } from "components/CustomButtons";
import SnackbarContent from "components/Snackbar/SnackbarContent";
import Snackbar from "components/Snackbar";
import Card from "components/Card";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import { Link } from "@mui/material";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

function Notifications() {
  const useStyles: Function = makeStyles(styles as DefaultTheme);
  const classes = useStyles();
  const [tl, setTL] = React.useState(false);
  const [tc, setTC] = React.useState(false);
  const [tr, setTR] = React.useState(false);
  const [bl, setBL] = React.useState(false);
  const [bc, setBC] = React.useState(false);
  const [br, setBR] = React.useState(false);
  React.useEffect(() => {
    // Specify how to clean up after this effect:
    return function cleanup() {
      // to stop the warning of calling setState of unmounted component
      var id = window.setTimeout(() => { }, 0);
      while (id--) {
        window.clearTimeout(id);
      }
    };
  });
  const showNotification = (place: string) => {
    switch (place) {
      case "tl":
        if (!tl) {
          setTL(true);
          setTimeout(function () {
            setTL(false);
          }, 6000);
        }
        break;
      case "tc":
        if (!tc) {
          setTC(true);
          setTimeout(function () {
            setTC(false);
          }, 6000);
        }
        break;
      case "tr":
        if (!tr) {
          setTR(true);
          setTimeout(function () {
            setTR(false);
          }, 6000);
        }
        break;
      case "bl":
        if (!bl) {
          setBL(true);
          setTimeout(function () {
            setBL(false);
          }, 6000);
        }
        break;
      case "bc":
        if (!bc) {
          setBC(true);
          setTimeout(function () {
            setBC(false);
          }, 6000);
        }
        break;
      case "br":
        if (!br) {
          setBR(true);
          setTimeout(function () {
            setBR(false);
          }, 6000);
        }
        break;
      default:
        break;
    }
  };
  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Notifications</h4>
        <p className={classes.cardCategoryWhite}>
          Handcrafted by our friends from{" "}
          <Link
            target="_blank"
            href="https://material-ui-next.com/?ref=creativetime" rel="noreferrer"
          >
            Material UI
          </Link>{" "}
          and styled by{" "}
          <Link
            target="_blank"
            href="https://www.creative-tim.com/?ref=njsmd-notifications-page" rel="noreferrer"
          >
            Creative Tim
          </Link>
          . Please checkout the{" "}
          <Link href="#pablo" target="_blank">
            full documentation
          </Link>
          .
        </p>
      </CardHeader>
      <CardBody>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <h5>Notifications Style</h5>
            <br />
            <SnackbarContent message={"This is a plain notification"}
              color="info" />
            <SnackbarContent
              message={"This is a notification with close button."}
              close
              color="primary"
            />
            <SnackbarContent
              message={"This is a notification with close button and icon."}
              close
              icon={AddAlert}
              color="warning"
            />
            <SnackbarContent
              message={
                "This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style."
              }
              close
              icon={AddAlert}
              color="danger"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <h5>Notifications States</h5>
            <br />
            <SnackbarContent
              message={
                'INFO - This is a regular notification made with color="info"'
              }
              close
              color="info"
            />
            <SnackbarContent
              message={
                'SUCCESS - This is a regular notification made with color="success"'
              }
              close
              color="success"
            />
            <SnackbarContent
              message={
                'WARNING - This is a regular notification made with color="warning"'
              }
              close
              color="warning"
            />
            <SnackbarContent
              message={
                'DANGER - This is a regular notification made with color="danger"'
              }
              close
              color="danger"
            />
            <SnackbarContent
              message={
                'PRIMARY - This is a regular notification made with color="primary"'
              }
              close
              color="primary"
            />
          </GridItem>
        </GridContainer>
        <br />
        <br />
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6} style={{ textAlign: "center" }}>
            <h5>
              Notifications Places
              <br />
              <small>Click to view notifications</small>
            </h5>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={10} lg={8}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  color={CustomButtonColors.primary}
                  onClick={() => showNotification("tl")}
                  fullWidth
                >
                  Top Left
                </Button>
                <Snackbar
                  place="tl"
                  color="info"
                  icon={AddAlert}
                  message="Welcome to NextJS MATERIAL DASHBOARD - a beautiful freebie for every web developer."
                  open={tl}
                  closeNotification={() => setTL(false)}
                  close
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  color={CustomButtonColors.primary}
                  onClick={() => showNotification("tc")}
                  fullWidth
                >
                  Top Center
                </Button>
                <Snackbar
                  place="tc"
                  color="info"
                  icon={AddAlert}
                  message="Welcome to NextJS MATERIAL DASHBOARD - a beautiful freebie for every web developer."
                  open={tc}
                  closeNotification={() => setTC(false)}
                  close
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  fullWidth
                  color={CustomButtonColors.primary}
                  onClick={() => showNotification("tr")}
                >
                  Top Right
                </Button>
                <Snackbar
                  place="tr"
                  color="info"
                  icon={AddAlert}
                  message="Welcome to NextJS MATERIAL DASHBOARD - a beautiful freebie for every web developer."
                  open={tr}
                  closeNotification={() => setTR(false)}
                  close
                />
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <GridContainer justify={"center"}>
          <GridItem xs={12} sm={12} md={10} lg={8}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  fullWidth
                  color={CustomButtonColors.primary}
                  onClick={() => showNotification("bl")}
                >
                  Bottom Left
                </Button>
                <Snackbar
                  place="bl"
                  color="info"
                  icon={AddAlert}
                  message="Welcome to NextJS MATERIAL DASHBOARD - a beautiful freebie for every web developer."
                  open={bl}
                  closeNotification={() => setBL(false)}
                  close
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  fullWidth
                  color={CustomButtonColors.primary}
                  onClick={() => showNotification("bc")}
                >
                  Bottom Center
                </Button>
                <Snackbar
                  place="bc"
                  color="info"
                  icon={AddAlert}
                  message="Welcome to NextJS MATERIAL DASHBOARD - a beautiful freebie for every web developer."
                  open={bc}
                  closeNotification={() => setBC(false)}
                  close
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button
                  fullWidth
                  color={CustomButtonColors.primary}
                  onClick={() => showNotification("br")}
                >
                  Bottom Right
                </Button>
                <Snackbar
                  place="br"
                  color="info"
                  icon={AddAlert}
                  message="Welcome to NextJS MATERIAL DASHBOARD - a beautiful freebie for every web developer."
                  open={br}
                  closeNotification={() => setBR(false)}
                  close
                />
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </CardBody>
    </Card>
  );
}

Notifications.layout = Admin;

export default Notifications;
