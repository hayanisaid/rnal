import React from "react";
import { View } from "react-native";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Fade from "./index";

describe("Testing Fade component component", () => {
  it("renders visible", () => {
    const Wrapper = shallow(<Fade startWhen={true} />);
    expect(Wrapper).toMatchSnapshot();
  });

  it("renders invisible", () => {
    const Wrapper = shallow(<Fade startWhen={false} />);
    expect(Wrapper).toMatchSnapshot();
  });

  it("makes have children", () => {
    const wrapper = shallow(
      <Fade>
        <View testID="card" />
      </Fade>
    );
    expect(wrapper.findWhere(node => node.prop("testID") === "card")).toExist();
  });

  jest.mock("Animated", () => {
    const ActualAnimated = require.requireActual("Animated");
    return {
      ...ActualAnimated,
      timing: (value, config) => {
        return {
          start: callback => {
            value.setValue(config.toValue);
            callback && callback();
          }
        };
      }
    };
  });
});
// img, title, location, description

// import React from 'react';
// import renderer from 'react-test-renderer';

// import { AnimatedOpacityController, AnimatedOpacity } from '../AnimatedOpacity';
