import React from 'react';
import { StyleSheet, View } from 'react-native';
// import { AnimatedCircularProgress } from 'react-native-circular-progress';

export function ProgressBar({ size, strokeWidth, bars }) {
    return (
        <View style={{ width: size, height: size, position: 'absolute' }}>
            {bars.map((item, i) => null)}
        </View>
    );
}
