import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Switch } from 'react-native';
import { colors } from '../../constants/colors';

import { commonStyles } from '../../constants/styles';

import { Text } from '../../components/Text';
import { Checkbox } from '../../components/checkbox/Checkbox';

import { MainScreenContainer } from '../../components/containers/MainScreenContainer';

const SelectedDay = ({ text }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    return (
        <View
            style={{
                width: '40%',
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 5,
            }}>
            {
                <Checkbox
                    style={{ borderRadius: 10 }}
                    checked={toggleCheckBox}
                    onPress={() => setToggleCheckBox(!toggleCheckBox)}
                />
            }
            <Text style={{ marginLeft: 10 }}>{text}</Text>
        </View>
    );
};

// TODO
export function SettingsScreen(props) {
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
            <ScrollView
                style={{ flex: 1, width: '100%' }}
                contentContainerStyle={styles.container}>
                {/* <Text>Settings</Text> */}
                <View
                    style={{
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}></View>
                <View
                    style={{
                        width: '100%',
                        borderColor: 'lightgray',
                        borderTopWidth: 2,
                        borderBottomWidth: 2,
                        paddingHorizontal: 20,
                        paddingVertical: 20,
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            width: '100%',
                            justifyContent: 'space-between',
                        }}>
                        <Text>Dark mode</Text>
                        <Switch
                            trackColor={{
                                false: '#eee',
                                true: colors.secondary.darkGreen,
                            }}
                            thumbColor={
                                isEnabled ? 'white' : colors.secondary.darkGreen
                            }
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 10,
                            width: '100%',
                            justifyContent: 'space-between',
                        }}>
                        <Text>Send anonymous usage analytics</Text>
                        <Switch
                            trackColor={{
                                false: '#eee',
                                true: colors.secondary.darkGreen,
                            }}
                            thumbColor={
                                analyticsEnabled
                                    ? 'white'
                                    : colors.secondary.darkGreen
                            }
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleAnalytics}
                            value={analyticsEnabled}
                        />
                    </View>
                </View>
                <View style={{ paddingTop: 20, width: '90%' }}>
                    <Text>Set Reminders</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        {<SelectedDay text={'Sunday'}></SelectedDay>}
                        {<SelectedDay text={'Monday'}></SelectedDay>}
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        {<SelectedDay text={'Tuesday'}></SelectedDay>}
                        {<SelectedDay text={'Wednesday'}></SelectedDay>}
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        {<SelectedDay text={'Thursday'}></SelectedDay>}
                        {<SelectedDay text={'Friday'}></SelectedDay>}
                    </View>
                    {<SelectedDay text={'Saturday'}></SelectedDay>}
                </View>
            </ScrollView>
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
