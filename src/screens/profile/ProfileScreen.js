import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { colors } from '../../constants/colors';

import { Text } from '../../components/Text';

import { text, flex, commonStyles } from '../../constants/styles';

import avatarImg from '../../../assets/icons/avatar.png';
import deadlineIcon from '../../../assets/icons/menu/deadline.png';
import settignsIcon from '../../../assets/icons/menu/settings.png';
import informationIcon from '../../../assets/icons/menu/information.png';

import { MainScreenContainer } from '../../components/containers/MainScreenContainer';
import { FONTS } from '../../constants/texts';

const ProfileTab = ({ title, icon, onPress }) => {
    return (
        <TouchableOpacity style={{ flex: 1 }} onPress={onPress}>
            <View
                style={{
                    paddingVertical: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Image
                    style={{
                        margin: 5,
                        height: 25,
                        width: 25,
                        tintColor: 'gray',
                    }}
                    source={icon}
                />
                <Text style={{ color: 'gray', fontSize: 12 }}>
                    {title.toUpperCase()}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const Separator = () => {
    return (
        <View
            style={{ width: 2, height: '100%', backgroundColor: 'lightgray' }}
        />
    );
};

const InputBlock = ({ title, value, onChange, style }) => {
    return (
        <View
            style={{
                borderBottomWidth: 2,
                borderColor: 'lightgray',
                paddingBottom: 10,
                marginVertical: 10,
                ...style,
            }}>
            <Text
                style={{
                    color: colors.primary.gradient1,
                    fontSize: 12,
                    marginBottom: 5,
                }}>
                {title.toUpperCase()}
            </Text>
            <TextInput
                style={{
                    fontFamily: FONTS.MONTSERRAT,
                    color: colors.primary.name,
                }}
                value={value}
                onChangeText={onChange}
            />
        </View>
    );
};

const avatarStyle = ({ backgroundColor, borderColor }) => {
    return {
        padding: 15,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderRadius: 100,
    };
};

// TODO
export function ProfileScreen(props) {
    const [firstName, setFirstName] = useState('John');
    const [lastName, setLastName] = useState('Doe');
    const [email, setEmail] = useState('testemail@mail.com');
    const [phoneNumber, setPhoneNumber] = useState('+1 646 8956579');
    const [about, setAbout] = useState('Information about yourself');

    const goToCongrats = () => {
        props.navigation.navigate('Congrats');
    };

    return (
        <MainScreenContainer>
            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={styles.container}>
                <View
                    style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View
                        style={{
                            marginTop: 40,
                            ...avatarStyle({
                                backgroundColor: `${colors.states.error}10`,
                                borderColor: `${colors.states.error}80`,
                            }),
                        }}>
                        <View
                            style={{
                                ...avatarStyle({
                                    backgroundColor: `${colors.states.error}15`,
                                    borderColor: `${colors.states.error}80`,
                                }),
                            }}>
                            <View
                                style={{
                                    ...avatarStyle({
                                        backgroundColor: `${colors.states.error}20`,
                                        borderColor: `${colors.states.error}80`,
                                    }),
                                }}>
                                <View style={styles.avatarWrapper}>
                                    <Image
                                        style={styles.avatar}
                                        source={avatarImg}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        borderColor: 'lightgray',
                        marginVertical: 10,
                        // borderBottomWidth: 2,borderTopWidth: 2,
                    }}>
                    {
                        <ProfileTab
                            icon={deadlineIcon}
                            title={'Sessions'}
                            onPress={() =>
                                props.navigation.navigate('Appointments')
                            }
                        />
                    }
                    {<Separator />}
                    {
                        <ProfileTab
                            icon={settignsIcon}
                            title={'Settings'}
                            onPress={() =>
                                props.navigation.navigate('Settings')
                            }
                        />
                    }
                    {<Separator />}
                    {
                        <ProfileTab
                            icon={informationIcon}
                            title={'Information'}
                            onPress={() =>
                                props.navigation.navigate('Information')
                            }
                        />
                    }
                </View>
                <View style={{ flex: 1, width: '100%', paddingHorizontal: 20 }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        {
                            <InputBlock
                                style={{ width: '48%' }}
                                title={'First name'}
                                value={firstName}
                                onChange={setFirstName}
                            />
                        }
                        {
                            <InputBlock
                                style={{ width: '48%' }}
                                title={'Last name'}
                                value={lastName}
                                onChange={setLastName}
                            />
                        }
                    </View>
                    {
                        <InputBlock
                            title={'email'}
                            value={email}
                            onChange={setEmail}
                        />
                    }
                    {
                        <InputBlock
                            title={'Phone number'}
                            value={phoneNumber}
                            onChange={setPhoneNumber}
                        />
                    }
                    {
                        <InputBlock
                            title={'About'}
                            value={about}
                            onChange={setAbout}
                        />
                    }
                </View>
            </ScrollView>
        </MainScreenContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingBottom: 50,
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
