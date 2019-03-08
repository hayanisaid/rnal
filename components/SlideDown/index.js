//@flow

import React, { Component } from "react";
import { Text, View, Animated, StyleSheet } from "react-native";
type Props = {
  children: any,
  style: Object,
  duration: number
};
type State = {
  animatedValue: Object,
  duration: number
};

export default class SlideUp extends Component<Props, State> {
  state = {
    animatedValue: new Animated.Value(0),
    duration: this.props.duration || 500
  };
  static defaultProps = {
    duration: 300
  };
  componentDidMount() {
    this._start();
  }

  _start = () => {
    Animated.spring(this.state.animatedValue, {
      toValue: 1,
      duration: this.state.duration,
      useNativeDriver: true
    }).start();
  };
  render() {
    let { animatedValue } = this.state;
    let { children, style, ...props } = this.props;
    return (
      <Animated.View
        {...props}
        style={{
          ...style,
          transform: [
            {
              translateY: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [-300, 0]
              })
            },
            { perspective: 1000 }
          ]
        }}
      >
        {children}
      </Animated.View>
    );
  }
}
