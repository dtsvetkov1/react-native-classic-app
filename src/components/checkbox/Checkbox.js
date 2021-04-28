import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors } from '../../constants/colors';


import tickIcon from '../../../assets/icons/tick.png';

// import { TouchableOpacity } from 'react-native-gesture-handler';

// TODO
export function Checkbox(props) {
    const { checked, onPress } = props;

    return (
        <TouchableOpacity
            style={{
                borderWidth: 2,
                borderColor: colors.secondary.darkGreen,
                height: 25,
                width: 25,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: checked ? colors.secondary.darkGreen : 'white',
            }}
            onPress={onPress}>
            <Image
                source={tickIcon}
                style={{
                    height: 15,
                    width: 15,
                    tintColor: checked ? 'white' : colors.secondary.darkGreen,
                }}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});
