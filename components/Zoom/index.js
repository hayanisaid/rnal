//@flow

import React, { Component } from "react";
import { Text, View, Animated, StyleSheet } from "react-native";
type Props = {
  children: any,
  style: Object,
  duration: number,
  startWhen: boolean,
  sets: Object,
  infinite: boolean,
  direction: string
};
type State = {
  animatedValue: Object,
  duration: number
};

export default class ZoomIn extends Component<Props, State> {
  state = {
    animatedValue: new Animated.Value(0),
    duration: this.props.duration || 500
  };

  //  insure always that animated method has some sets
  static defaultProps = {
    duration: 100,
    startWhen: false,
    infinite: false,
    sets: {
      from: 0,
      to: 180
    }
  };

  componentDidMount() {
    let { startWhen } = this.props;
    if (!this.props.hasOwnProperty("startWhen")) {
      this._start();
    }
  }
  componentDidUpdate(prevProps: Object, prevState: Object) {
    let { startWhen } = this.props;
    if (startWhen !== prevProps.startWhen) {
      this._start();
    }
  }

  _start = () => {
    let { infinite } = this.props;
    if (infinite) {
      Animated.loop(
        Animated.timing(this.state.animatedValue, {
          toValue: 1,
          duration: this.state.duration,
          useNativeDriver: true
        })
      ).start();
    } else {
      Animated.timing(this.state.animatedValue, {
        toValue: 1,
        duration: this.state.duration,
        useNativeDriver: true
      }).start();
    }
  };
  render() {
    let { animatedValue } = this.state;

    let {
      children,
      style,
      direction,
      sets: { from, to },
      ...props
    } = this.props;

    // set the default sets or take if exists
    const directions = {
      in: [from || 0, to || 1],
      out: [from || 1, to || 0]
    };
    let zoomDirection = direction ? directions[direction] : [0, 1];
    return (
      <Animated.View
        {...props}
        style={{
          ...style,
          transform: [
            {
              scale: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: zoomDirection
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
