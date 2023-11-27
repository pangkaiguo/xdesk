import React from "react";
import classnames from "classnames";
import imagine1 from "theme/img/sidebar-1.jpg";
import imagine2 from "theme/img/sidebar-2.jpg";
import imagine3 from "theme/img/sidebar-3.jpg";
import imagine4 from "theme/img/sidebar-4.jpg";
import { IconButton, Link } from "@mui/material";
import { Settings } from '@mui/icons-material';
import lodash from "lodash";

interface FixedPluginProps {
  bgImage?: string | StaticImageData;
  handleFixedClick?: Function;
  fixedClasses?: string;
  bgColor?: "white" | "purple" | "blue" | "green" | "orange" | "red";
  handleColorClick?: Function;
  handleImageClick?: Function;
}
export default function FixedPlugin(props: FixedPluginProps) {
  const [classes, setClasses] = React.useState("dropdown show");
  const [bg_checked, setBg_checked] = React.useState(true);
  const [bgImage, setBgImage] = React.useState(props.bgImage);
  const handleClick = () => {
    lodash.isFunction(props?.handleFixedClick) && props.handleFixedClick();
  };
  return (
    <div className={classnames("fixed-plugin")}>
      <div id="fixedPluginClasses" className={props.fixedClasses}>
        <div onClick={handleClick}>
          <IconButton><Settings /></IconButton>
        </div>
        <ul className="dropdown-menu">
          <li className="header-title">导航颜色</li>
          <li className="adjustments-line">
            <Link className="switch-trigger">
              <div>
                <span
                  className={
                    props.bgColor === "white"
                      ? "badge filter badge-white active"
                      : "badge filter badge-white"
                  }
                  data-color="white"
                  onClick={() => {
                    lodash.isFunction(props?.handleColorClick) && props.handleColorClick("white");
                  }}
                />
                <span
                  className={
                    props.bgColor === "purple"
                      ? "badge filter badge-purple active"
                      : "badge filter badge-purple"
                  }
                  data-color="purple"
                  onClick={() => {
                    lodash.isFunction(props?.handleColorClick) && props.handleColorClick("purple");
                  }}
                />
                <span
                  className={
                    props.bgColor === "blue"
                      ? "badge filter badge-blue active"
                      : "badge filter badge-blue"
                  }
                  data-color="blue"
                  onClick={() => {
                    lodash.isFunction(props?.handleColorClick) && props.handleColorClick("blue");
                  }}
                />
                <span
                  className={
                    props.bgColor === "green"
                      ? "badge filter badge-green active"
                      : "badge filter badge-green"
                  }
                  data-color="green"
                  onClick={() => {
                    lodash.isFunction(props?.handleColorClick) && props.handleColorClick("green");
                  }}
                />
                <span
                  className={
                    props.bgColor === "red"
                      ? "badge filter badge-red active"
                      : "badge filter badge-red"
                  }
                  data-color="red"
                  onClick={() => {
                    lodash.isFunction(props?.handleColorClick) && props.handleColorClick("red");
                  }}
                />
                <span
                  className={
                    props.bgColor === "orange"
                      ? "badge filter badge-orange active"
                      : "badge filter badge-orange"
                  }
                  data-color="orange"
                  onClick={() => {
                    lodash.isFunction(props?.handleColorClick) && props.handleColorClick("orange");
                  }}
                />
              </div>
            </Link>
          </li>
          <li className="header-title">导航背景</li>
          <li className={bgImage === imagine1.src ? "active" : ""}>
            <Link
              className="img-holder switch-trigger"
              onClick={() => {
                setBgImage(imagine1.src);
                lodash.isFunction(props?.handleImageClick) && props.handleImageClick(imagine1.src);
              }}
            >
              <img src={imagine1.src} alt={imagine1.blurDataURL} />
            </Link>
          </li>
          <li className={bgImage === imagine2.src ? "active" : ""}>
            <Link
              className="img-holder switch-trigger"
              onClick={() => {
                setBgImage(imagine2.src);
                lodash.isFunction(props?.handleImageClick) && props.handleImageClick(imagine2.src);
              }}
            >
              <img src={imagine2.src} alt={imagine2.blurDataURL} />
            </Link>
          </li>
          <li className={bgImage === imagine3.src ? "active" : ""}>
            <Link
              className="img-holder switch-trigger"
              onClick={() => {
                setBgImage(imagine3.src);
                lodash.isFunction(props?.handleImageClick) && props.handleImageClick(imagine3.src);
              }}
            >
              <img src={imagine3.src} alt={imagine3.blurDataURL} />
            </Link>
          </li>
          <li className={bgImage === imagine4.src ? "active" : ""}>
            <Link
              className="img-holder switch-trigger"
              onClick={() => {
                setBgImage(imagine4.src);
                lodash.isFunction(props?.handleImageClick) && props.handleImageClick(imagine4.src);
              }}
            >
              <img src={imagine4.src} alt={imagine4.blurDataURL} />
            </Link>
          </li>
          <li className="adjustments-line" />
        </ul>
      </div>
    </div>
  );
}

