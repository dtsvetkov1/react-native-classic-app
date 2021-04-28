import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Svg, { Path } from 'react-native-svg';

import { colors } from '../../constants/colors';

// Properties of a line
// I:  - pointA (array) [x,y]: coordinates
//     - pointB (array) [x,y]: coordinates
// O:  - (object) { length: l, angle: a }: properties of the line
const line = (pointA, pointB) => {
    const lengthX = pointB[0] - pointA[0];
    const lengthY = pointB[1] - pointA[1];
    return {
        length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
        angle: Math.atan2(lengthY, lengthX),
    };
};

// Position of a control point
// I:  - current (array) [x, y]: current point coordinates
//     - previous (array) [x, y]: previous point coordinates
//     - next (array) [x, y]: next point coordinates
//     - reverse (boolean, optional): sets the direction
// O:  - (array) [x,y]: a tuple of coordinates
const controlPoint = (current, previous, next, reverse) => {
    // When 'current' is the first or last point of the array
    // 'previous' or 'next' don't exist.
    // Replace with 'current'
    const p = previous || current;
    const n = next || current;
    // The smoothing ratio
    const smoothing = 0.2;
    // Properties of the opposed-line
    const o = line(p, n);
    // If is end-control-point, add PI to the angle to go backward
    const angle = o.angle + (reverse ? Math.PI : 0);
    const length = o.length * smoothing;
    // The control point position is relative to the current point
    const x = current[0] + Math.cos(angle) * length;
    const y = current[1] + Math.sin(angle) * length;
    return [x, y];
};

// Create the bezier curve command
// I:  - point (array) [x,y]: current point coordinates
//     - i (integer): index of 'point' in the array 'a'
//     - a (array): complete array of points coordinates
// O:  - (string) 'C x2,y2 x1,y1 x,y': SVG cubic bezier C command

const bezierCommand = (point, i, a) => {
    // start control point
    const [cpsX, cpsY] = controlPoint(a[i - 1], a[i - 2], point);
    // end control point
    const [cpeX, cpeY] = controlPoint(point, a[i - 1], a[i + 1], true);
    return `C ${cpsX},${cpsY} ${cpeX},${cpeY} ${point[0]},${point[1]}`;
};

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
export function PlotFill(props) {
    const { points, points2 } = props;

    const pathLine = groupByTwo(points.map((item) => lineCommand(item)))
        .map((item) => 'S' + lineCommand(item))
        .join('');
    const pathLine2 = groupByTwo(points2.map((item) => lineCommand(item)))
        .map((item) => 'S' + lineCommand(item))
        .join('');

    // console.log(pathLine)
    return (
        <Svg style={{ width: 200, height: 50 }}>
            <Path
                scale={5}
                // scaleY={10}
                d={`M 0 10 ${pathLine} L 40 10`}
                // d={'M 8 8 A 1 1 0 0 1 50 92'}
                fill="rgba(0,0,255,0.7)"
                // stroke="red"
            />
            <Path
                scale={5}
                d={`M 0 10 ${pathLine2} L 40 10`}
                // d={'M 8 8 A 1 1 0 0 1 50 92'}
                fill="rgba(255,0,0,0.5)"
                // stroke="red"
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
