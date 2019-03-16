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

export default class Rotate extends Component<Props, State> {
  state = {
    animatedValue: new Animated.Value(0),
    duration: this.props.duration || 500
  };
  static defaultProps = {
    duration: 100,
    direction: "toRight",
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
      sets: { from = 0, to = 180 },
      direction,
      ...props
    } = this.props;

    //  the direction the animation will start from
    let directions = {
      toRight: [`${from}deg` || "0deg", `${to}deg` || "180deg"],
      toLeft: [`${from}deg` || "180deg", `${to}deg` || "0deg"]
    };
    return (
      <Animated.View
        {...props}
        style={{
          ...style,
          transform: [
            {
              rotate: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: directions[direction]
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
