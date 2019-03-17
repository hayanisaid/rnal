import React from "react";
import { View } from "react-native";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import SlideDown from "./index";

describe("Testing SlideDown component component", () => {
  it("renders visible", () => {
    const Wrapper = shallow(<SlideDown startWhen={true} />);
    expect(Wrapper).toMatchSnapshot();
  });

  it("renders invisible", () => {
    const Wrapper = shallow(<SlideDown startWhen={false} />);
    expect(Wrapper).toMatchSnapshot();
  });

  it("Check it has  children", () => {
    const wrapper = shallow(
      <SlideDown>
        <View testID="card" />
      </SlideDown>
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
