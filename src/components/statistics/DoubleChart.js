import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Svg, { Path, Rect, Circle, G } from 'react-native-svg';

import { colors } from '../../constants/colors';

const DoubleBar = ({ xPosition, heightOne, heightTwo, colorOne, colorTwo }) => {
    return (
        <G height={100} style={{ marginTop: 10 }}>
            <Rect
                x={xPosition}
                y={100 - heightOne}
                width="10"
                height={heightOne}
                fill={colorOne}
            />
            <Rect
                x={xPosition}
                y={100 - heightOne - heightTwo}
                width="10"
                height={heightTwo}
                fill={colorTwo}
            />
        </G>
    );
};

export function DoubleChart(props) {
    const { points, points2 } = props;

    // console.log(pathLine)
    return (
        <Svg style={{ width: 200, height: 100, padding: 10 }}>
            <DoubleBar
                xPosition={10}
                heightOne={50}
                heightTwo={10}
                colorOne={colors.states.success}
                colorTwo={colors.states.error}
            />
            <DoubleBar
                xPosition={30}
                heightOne={60}
                heightTwo={5}
                colorOne={colors.states.success}
                colorTwo={colors.states.error}
            />
            <DoubleBar
                xPosition={50}
                heightOne={70}
                heightTwo={5}
                colorOne={colors.states.success}
                colorTwo={colors.states.error}
            />
            <DoubleBar
                xPosition={70}
                heightOne={20}
                heightTwo={15}
                colorOne={colors.states.success}
                colorTwo={colors.states.error}
            />
            <DoubleBar
                xPosition={90}
                heightOne={10}
                heightTwo={5}
                colorOne={colors.states.success}
                colorTwo={colors.states.error}
            />
            <DoubleBar
                xPosition={110}
                heightOne={85}
                heightTwo={5}
                colorOne={colors.states.success}
                colorTwo={colors.states.error}
            />
            <DoubleBar
                xPosition={130}
                heightOne={40}
                heightTwo={15}
                colorOne={colors.states.success}
                colorTwo={colors.states.error}
            />
            <DoubleBar
                xPosition={150}
                heightOne={40}
                heightTwo={15}
                colorOne={colors.states.success}
                colorTwo={colors.states.error}
            />
        </Svg>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    topBlock: {
        // flex: 1,
        height: 200,
        width: '100%',
        backgroundColor: colors.tertiary.sea,
        borderBottomEndRadius: 10,
    },
});
