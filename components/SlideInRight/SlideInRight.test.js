import React from "react";
import { View } from "react-native";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import SlideInRight from "./index";

describe("Testing SlideInRight component component", () => {
  it("renders visible", () => {
    const Wrapper = shallow(<SlideInRight startWhen={true} />);
    expect(Wrapper).toMatchSnapshot();
  });

  it("renders invisible", () => {
    const Wrapper = shallow(<SlideInRight startWhen={false} />);
    expect(Wrapper).toMatchSnapshot();
  });

  it("Check it has  children", () => {
    const wrapper = shallow(
      <SlideInRight>
        <View testID="card" />
      </SlideInRight>
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
