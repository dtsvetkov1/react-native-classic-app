import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Image,
    KeyboardAvoidingView,
    ScrollView,
} from 'react-native';

import { DefaultButton } from '../../components/buttons/DefaultButton';
import { Previous } from '../../components/buttons/Previous';
import { DefaultInput } from '../../components/inputs/DefaultInput';
import { PasswordInput } from '../../components/inputs/PasswordInput';
import { Text } from '../../components/Text';

import { validation } from '../../constants/regex';

import { colors } from '../../constants/colors';
import { text, flex, commonStyles } from '../../constants/styles';

// TODO repace login and passowrd with real ones from backend
export function LoginScreen(props) {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    const onLoginButtonPress = () => {
        // TODO add sms code screen
        // props.navigation.navigate('InputSMSCodeScreen');
        props.navigation.navigate('Main');
    };

    const getEmailStatus = () => {
        if (!email || validation.email.test(email)) {
            return 'success';
        }
        return 'error';
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollable}>
                <Previous navigation={props.navigation} />
                <View style={flex.columnCenter}>
                    <Image
                        style={commonStyles.headerIcon}
                        source={require('../../../assets/images/2.png')}
                    />
                    <Text style={text.h3}>Login</Text>
                    <Text style={[text.h4, commonStyles.helper]}>
                        {'Enter your login details to\r\naccess your account'}
                    </Text>
                </View>
                <View style={[flex.columnCenter]}>
                    <DefaultInput
                        status={getEmailStatus()}
                        placeholder={'email'}
                        value={email}
                        setValue={setEmail}
                    />
                    <PasswordInput
                        placeholder={'password'}
                        value={password}
                        setValue={setPassword}
                    />
                </View>
                <DefaultButton
                    title={'LOG IN'}
                    buttonStyle={styles.buttonStyle}
                    textStyle={styles.textStyle}
                    gradient={[
                        colors.primary.gradient1,
                        colors.primary.gradient2,
                    ]}
                    onPress={onLoginButtonPress}
                />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollable: {
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
});
