import React from "react";
import "react-native";
import renderer from "react-test-renderer";

import Fade from "./index";

describe("Testing Fade component component", () => {
  it("expect to  render correctly", () => {
    const tree = renderer.create(<Fade />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
// img, title, location, description
