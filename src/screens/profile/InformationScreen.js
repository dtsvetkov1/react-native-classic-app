import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { commonStyles } from '../../constants/styles';

import { MainScreenContainer } from '../../components/containers/MainScreenContainer';

// import { TouchableOpacity } from 'react-native-gesture-handler';

// TODO
export function InformationScreen(props) {
    const [isEnabled, setIsEnabled] = useState(false);
    const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    const toggleAnalytics = () =>
        setAnalyticsEnabled((previousState) => !previousState);

    const goToCongrats = () => {
        props.navigation.navigate('Congrats');
    };

    return (
        <MainScreenContainer>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text>App version: 0.0.2, build 1</Text>
                    <Text style={{ marginTop: 5 }}>
                        Last updated: Dec 15 2020
                    </Text>
                </View>
                <View style={{ bottom: 100, alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Text style={{ color: 'blue' }}>Leave a review</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ color: 'blue', marginTop: 10 }}>
                            Contact us
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </MainScreenContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    avatar: {
        resizeMode: 'cover',
        height: 75,
        width: 75,
    },
    avatarWrapper: {
        ...commonStyles.shadow,
        borderWidth: 4,
        borderColor: 'white',
        overflow: 'hidden',
        borderRadius: 45,
    },
});
