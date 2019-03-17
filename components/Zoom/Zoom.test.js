import React from "react";
import { View } from "react-native";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Zoom from "./index";

describe("Testing Zoom component component", () => {
  it("renders visible", () => {
    const Wrapper = shallow(<Zoom startWhen={true} />);
    expect(Wrapper).toMatchSnapshot();
  });

  it("renders invisible", () => {
    const Wrapper = shallow(<Zoom startWhen={false} />);
    expect(Wrapper).toMatchSnapshot();
  });

  it("Check it has  children", () => {
    const wrapper = shallow(
      <Zoom duration={100}>
        <View testID="card" />
      </Zoom>
    );
    expect(wrapper.findWhere(node => node.prop("testID") === "card")).toExist();
    expect(wrapper.findWhere(node => node.prop("duration") === 100)).toExist();
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
