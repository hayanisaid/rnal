import React from "react";
import { View } from "react-native";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Rotate from "./index";

describe("Testing Rotate component component", () => {
  it("renders visible", () => {
    const Wrapper = shallow(<Rotate startWhen={true} />);
    expect(Wrapper).toMatchSnapshot();
  });

  it("renders invisible", () => {
    const Wrapper = shallow(<Rotate startWhen={false} />);
    expect(Wrapper).toMatchSnapshot();
  });

  it("makes have children", () => {
    const wrapper = shallow(
      <Rotate>
        <View testID="card" />
      </Rotate>
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
