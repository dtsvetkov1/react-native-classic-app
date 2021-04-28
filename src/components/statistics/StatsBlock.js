import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/colors';
import { PlotFill } from './Plot';
import { Chart } from './Chart';
import { FONTS } from '../../constants/texts';

const generateRandom = (min, max) => {
    return (Math.random() * (max - min) + min).toFixed(2);
};

const mock_points = [
    [1, generateRandom(1, 10)],
    [5, generateRandom(1, 10)],
    [10, generateRandom(1, 10)],
    [20, generateRandom(1, 10)],
    [30, generateRandom(1, 10)],
    [40, generateRandom(1, 10)],
    [10, generateRandom(1, 10)],
];

const mock_points2 = [
    [1, generateRandom(1, 10)],
    [5, generateRandom(1, 10)],
    [10, generateRandom(1, 10)],
    [20, generateRandom(1, 10)],
    [30, generateRandom(1, 10)],
    [40, generateRandom(1, 10)],
    [10, generateRandom(1, 10)],
];

const mock_chart_points = [
    [1, generateRandom(1, 10)],
    [5, generateRandom(1, 10)],
    [10, generateRandom(1, 10)],
    [20, generateRandom(1, 10)],
    [30, generateRandom(1, 10)],
    [40, generateRandom(1, 10)],
    [10, generateRandom(1, 10)],
];

// TODO
export function StatsBlock(props) {
    const { color, title, children, style } = props;

    return (
        <View style={[styles.container, style, { backgroundColor: color }]}>
            <Text style={styles.title}>{title}</Text>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        borderRadius: 20,
        // justifyContent: 'center',
        alignItems: 'center',
        elevation: 7,
        padding: 10,
        // height: 250,
    },
    title: {
        fontSize: 16,
        fontFamily: FONTS.MONTSERRAT_BOLD,
        color: 'white',
    },
});
