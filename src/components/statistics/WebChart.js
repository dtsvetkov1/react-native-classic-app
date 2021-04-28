import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Svg, { Path, Polygon } from 'react-native-svg';

import { colors } from '../../constants/colors';

// Q
// TODO
// M-17.5 378.5C31.5 32.5 302.5 463 375 89C447.5 -285 375 644 375 644H0C0 644 -66.5 724.5 -17.5 378.5Z"

const generatePointsString = (arr) => {
    return arr.map((item) => item.join(',')).join(' ');
};

export function WebChart(props) {
    const { points } = props;

    return (
        <Svg style={{ width: 200, height: 50 }}>
            <Polygon
                scale={10}
                points={generatePointsString(points)}
                // fill="lime"
                stroke="purple"
                strokeWidth="0.2"
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
