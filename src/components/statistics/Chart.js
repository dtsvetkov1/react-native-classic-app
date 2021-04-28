import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Svg, { Path, Rect, Circle, G } from 'react-native-svg';

import { colors } from '../../constants/colors';

const groupByTwo = (arr) => {
    let n = [];
    for (let i = 0; i < arr.length - 1; i = i + 2) {
        n.push([arr[i], arr[i + 1]]);
    }
    return n;
};

const lineCommand = (point) => ` ${point[0]} ${point[1]}`;
// Q
// TODO
// M-17.5 378.5C31.5 32.5 302.5 463 375 89C447.5 -285 375 644 375 644H0C0 644 -66.5 724.5 -17.5 378.5Z"

const Bar = ({ xPosition, height, color }) => {
    return (
        <G style={{ marginTop: 10 }}>
            <Rect
                x={xPosition}
                y={100 - height}
                width="20"
                height={height}
                fill={color}
                // strokeWidth="3"
                // stroke="rgb(0,0,0)"
            ></Rect>
            {/* <Circle cx="35" cy="10" r="10" fill={color} /> */}
        </G>
    );
};

export function Chart(props) {
    const { points, points2 } = props;

    const pathLine = groupByTwo(points.map((item) => lineCommand(item)))
        .map((item) => 'S' + lineCommand(item))
        .join('');

    // console.log(pathLine)
    return (
        <Svg style={{ width: 200, height: 100, padding: 10 }}>
            <Bar xPosition={10} height={70} color={'blue'} />
            <Bar xPosition={40} height={50} color={'blue'} />
            <Bar xPosition={70} height={30} color={'blue'} />
            <Bar xPosition={100} height={90} color={'blue'} />
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
