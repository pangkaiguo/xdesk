import React from "react";
import { useRouter } from "next/router";
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { DefaultTheme, makeStyles } from "@mui/styles";
import Navbar from "components/Navbars";
import Footer from "components/Footer";
import Sidebar from "components/Sidebar";
import FixedPlugin from "components/FixedPlugin";
import routes from "layouts/routes";
import styles from "theme/ts/layouts/adminStyle";
import bgImage from "theme/img/sidebar-2.jpg";
import logo from "public/logo.png";

let ps: PerfectScrollbar;
interface Props {
  children?: any,
  rest?: any
}
export default function Admin(props: Props) {
  const { children, rest } = props;
  // used for checking current route
  const router = useRouter();
  // styles
  const useStyles: Function = makeStyles(styles as DefaultTheme);
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel: React.RefObject<HTMLDivElement> | React.LegacyRef<HTMLDivElement> | undefined = React.createRef();
  // states and functions
  const [image, setImage] = React.useState(bgImage.src);
  const [color, setColor] = React.useState<any>("purple");
  const [fixedClasses, setFixedClasses] = React.useState("dropdown");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleImageClick = (img: string) => {
    setImage(img);
  };
  const handleColorClick = (clr: string) => {
    setColor(clr);
  };
  const handleFixedClick = () => {
    if (fixedClasses === "dropdown") {
      setFixedClasses("dropdown show");
    } else {
      setFixedClasses("dropdown");
    }
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return router.pathname;
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  // initialize and destroy the PerfectScrollbar plugin
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current as (string | Element), {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);
  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={routes}
        logoText={"XDESK"}
        logo={logo}
        image={image}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>{children}</div>
          </div>
        ) : (
          <div className={classes.map}>{children}</div>
        )}
        {getRoute() ? <Footer /> : null}
        <FixedPlugin
          handleImageClick={handleImageClick}
          handleColorClick={handleColorClick}
          bgColor={color}
          bgImage={image}
          handleFixedClick={handleFixedClick}
          fixedClasses={fixedClasses}
        />
      </div>
    </div>
  );
}
