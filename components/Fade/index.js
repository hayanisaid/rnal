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

export default class Fade extends Component<Props, State> {
  state = {
    animatedValue: new Animated.Value(0),
    duration: this.props.duration || 500
  };
  static defaultProps = {
    duration: 500
  };
  componentDidMount() {
    this._start();
  }

  _start = () => {
    Animated.timing(this.state.animatedValue, {
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
        style={{ ...style, opacity: this.state.animatedValue }}
      >
        {children}
      </Animated.View>
    );
  }
}
