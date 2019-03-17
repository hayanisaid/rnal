// setup-tests.js
import React from "react";
import "react-native";
import "jest-enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
