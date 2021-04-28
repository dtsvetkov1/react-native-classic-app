import React from 'react';
import { StyleSheet, View } from 'react-native';

import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Text } from '../Text';

export function DefaultButton(props) {
    const { onPress, title, buttonStyle, textStyle, gradient } = props;

    return gradient ? (
        <LinearGradient
            style={[styles.container, buttonStyle]}
            colors={gradient}
            end={{ x: 0.99, y: -0.2 }}
            start={{ x: 1, y: 0.7 }}>
            <TouchableOpacity style={[styles.wrapper]} onPress={onPress}>
                <Text style={[styles.text, textStyle]}>{title}</Text>
            </TouchableOpacity>
        </LinearGradient>
    ) : (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, buttonStyle]}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {},
    text: {
        color: 'black',
    },
});
