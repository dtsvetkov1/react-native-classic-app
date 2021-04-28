import React from 'react';
import { StyleSheet, Text as DefaultText, View } from 'react-native';

import { colors } from '../constants/colors';
import { FONTS } from '../constants/texts';

// TODO add font to style this custom text component
export function Text(props) {
    const { style, children } = props;

    return (
        <DefaultText style={[styles.container, style]}>{children}</DefaultText>
    );
}

const styles = StyleSheet.create({
    container: {
        fontFamily: FONTS.MONTSERRAT,
        fontSize: 14,
    },
});
