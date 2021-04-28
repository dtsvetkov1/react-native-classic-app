import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    KeyboardAvoidingView,
    TextInput,
} from 'react-native';

import { DefaultButton } from '../../components/buttons/DefaultButton';
import { Previous } from '../../components/buttons/Previous';
import { text, flex, commonStyles } from '../../constants/styles';

export function InputSMSCodeScreen(props) {
    let [code, setCode] = useState(['', '', '', '']);

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Previous navigation={props.navigation} />
            <View style={flex.columnCenter}>
                <Image
                    style={commonStyles.headerIcon}
                    source={require('../../../assets/icons/main-app-icon.png')}
                />
                <Text style={[text.h4, commonStyles.helper]}>
                    {'Verify your number with\n\r codes sent to you'}
                </Text>
            </View>
            <View style={[flex.rowCenter, styles.code]}>
                {code.map((item, i) => (
                    <View
                        style={[styles.codeCell, styles.codeCellfull]}
                        key={i}>
                        <TextInput style={styles.input} />
                    </View>
                ))}
            </View>
            <DefaultButton onPress={() => {}} title={'Next'} />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 40,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonStyle: {
        width: '70%',
        height: 50,
        marginTop: '20%',
        borderRadius: 20,
    },
    textStyle: {
        color: 'white',
    },
    code: {
        width: '90%',
    },
    codeCell: {
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
    },
    input: {
        paddingVertical: 0,
        paddingHorizontal: 5,
        flex: 1,
        elevation: 10,
    },
});
