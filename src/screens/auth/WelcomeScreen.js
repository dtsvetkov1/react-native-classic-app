import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { DefaultButton } from '../../components/buttons/DefaultButton';
import { Text } from '../../components/Text';

import { colors } from '../../constants/colors';
import { text, flex, commonStyles } from '../../constants/styles';

import headerIcon from '../../../assets/images/2.png';
import doctorImg from '../../../assets/images/Doctor.png';

export function WelcomeScreen(props) {
    let [page, setPage] = useState(0);
    const onLoginButtonPress = () => {
        props.navigation.navigate('SignUp');
    };
    const signIn = () => {
        props.navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Image style={commonStyles.headerIcon} source={headerIcon} />
            <Text style={text.h3}>Welcome to the app!</Text>
            <Text style={[text.h4, commonStyles.helper]}>
                A path to better mental health and stronger brain.
            </Text>
            <Image style={styles.mainPicture} source={doctorImg} />
            <View style={flex.rowCenter}>
                {[0, 1, 2, 3, 4].map((i) => (
                    <TouchableOpacity
                        onPress={() => {
                            setPage(i);
                        }}
                        key={i}>
                        <View
                            style={[
                                styles.pagingItem,
                                page === i && styles.pagingItemActive,
                            ]}
                        />
                    </TouchableOpacity>
                ))}
            </View>
            <DefaultButton
                title={'GET STARTED'}
                buttonStyle={styles.buttonStyle}
                textStyle={styles.textStyle}
                onPress={onLoginButtonPress}
                gradient={[colors.primary.gradient1, colors.primary.gradient2]}
            />
            <View style={[flex.rowCenter]}>
                <Text style={[text.h4, { color: colors.secondary.lightGreen }]}>
                    Already have an account?
                </Text>
                <TouchableOpacity onPress={signIn}>
                    <Text style={[text.h4, { color: colors.primary.name }]}>
                        {' '}
                        Sign In
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 20,
        justifyContent: 'space-around',
    },
    buttonStyle: {
        width: '70%',
        height: 60,
        borderRadius: 20,
    },
    textStyle: {
        color: 'white',
    },
    mainPicture: {
        height: '37%',
        resizeMode: 'center',
    },
    wrapper: {},
    pagingItem: {
        width: 10,
        height: 10,
        margin: 5,
        borderRadius: 30,
        backgroundColor: '#f4f9f4',
    },
    pagingItemActive: {
        backgroundColor: colors.secondary.lightGreen,
    },
});
