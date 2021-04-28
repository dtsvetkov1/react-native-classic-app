import React, { useState } from 'react';
import { StyleSheet, Image, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function PasswordInput({ placeholder, value, setValue }) {
    let [showPassword, setShowPassword] = useState(false);
    const toggleShow = () => setShowPassword(!showPassword);

    return (
        <View style={styles.wrapper}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={setValue}
                secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={toggleShow}>
                {showPassword ? (
                    <Image
                        source={require('../../../assets/icons/EyeActive.png')}
                        style={styles.icon}
                    />
                ) : (
                    <Image
                        source={require('../../../assets/icons/EyeInactive.png')}
                        style={styles.icon}
                    />
                )}
            </TouchableOpacity>
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
        resizeMode: 'center',
        width: 20,
    },
});
