/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

/** ----------- Elements --------------------- */

import Fade from "./components/Fade";
import SlideUp from "./components/SlideUp";
import SlideDown from "./components/SlideDown";
import SlideInRight from "./components/SlideInRight";
import Rotate from "./components/Rotate";
import Zoom from "./components/Zoom";
import SlideInLeft from "./components/SlideInLeft";

export { Fade, SlideDown, SlideInRight, SlideUp, Zoom, Rotate, SlideInLeft };

AppRegistry.registerComponent(appName, () => App);
