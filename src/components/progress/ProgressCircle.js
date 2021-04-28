import React, { Component, useEffect } from 'react';
import { StyleSheet, View, Dimensions, Animated } from 'react-native';
import { Svg, Rect, Path } from 'react-native-svg';

const { width, height } = Dimensions.get('window');
const AnimatedRect = Animated.createAnimatedComponent(Rect);
const AnimatedPath = Animated.createAnimatedComponent(Path);

function getInitialState() {
    const anim = new Animated.Value(0);
    const fillOpacity = anim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });
    const offset = fillOpacity.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 10],
    });
    const strokeOpacity = offset.interpolate({
        inputRange: [0, 10],
        outputRange: [0, 1],
        extrapolateRight: 'clamp',
    });
    const path = anim.interpolate({
        inputRange: [0, 1],
        outputRange: [
            'M 60 100 A 100 100 0 0 1 63 100',
            'M 60 100 A 100 100 0 0 1 131 271',
        ],
    });
    const fill = strokeOpacity.interpolate({
        inputRange: [0, 1],
        outputRange: ['rgba(255, 0, 0, 0.5)', 'rgba(0, 255, 0, 0.99)'],
    });
    const oneToFivePx = offset.interpolate({
        inputRange: [0, 10],
        outputRange: ['1px', '5px'],
    });
    return {
        anim,
        fillOpacity,
        offset,
        strokeOpacity,
        path,
        fill,
        oneToFivePx,
    };
}

export const ProgressCircle = () => {
    const anim = new Animated.Value(0);

    const path = anim.interpolate({
        inputRange: [0, 1],
        outputRange: [
            'M 60 100 A 100 100 0 0 1 63 100',
            'M 60 100 A 100 100 0 0 1 131 271',
        ],
    });

    useEffect(() => {
        Animated.timing(anim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    });

    return (
        <Svg width={width} height={height}>
            <AnimatedPath d={path} stroke="blue" />
        </Svg>
    );
};

export class ProgressCircle1 extends Component {
    state = getInitialState();

    componentDidMount() {
        const { anim } = this.state;
        Animated.timing(anim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();
    }

    render() {
        const { path } = this.state;
        return (
            <Svg width={width} height={height}>
                <AnimatedPath d={path} stroke="blue" />
            </Svg>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ecf0f1',
    },
});
