import React from 'react';
import { StyleSheet, Image, View, TextInput } from 'react-native';
import { Checked } from '../icons/Checked';
import { CheckedError } from '../icons/CheckedError';
import { CheckedWarning } from '../icons/CheckedWarning';

export function DefaultInput({ placeholder, status, value, setValue }) {
    let Icon;
    if (status === 'success') {
        Icon = Checked;
    }
    if (status === 'error') {
        Icon = CheckedError;
    }
    if (status === 'warning') {
        Icon = CheckedWarning;
    }

    return (
        <View style={styles.wrapper}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={setValue}
            />
            {Icon ? (
                <View style={styles.icon}>
                    <Icon />
                </View>
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '75%',
        padding: 20,
        maxHeight: 70,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        borderRadius: 15,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        backgroundColor: 'white',
    },
    input: {
        paddingVertical: 0,
        paddingHorizontal: 5,
        flex: 1,
    },
    icon: {
        width: 17,
        height: 17,
    },
});
