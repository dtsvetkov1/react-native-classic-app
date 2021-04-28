import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { colors } from '../../constants/colors';
import { DefaultButton } from '../../components/buttons/DefaultButton';
import { text, flex, commonStyles } from '../../constants/styles';

import brainImg from '../../../assets/icons/brain.png';
import labImg from '../../../assets/icons/lab1.png';
import menuImg from '../../../assets/icons/menu.png';
import avatarImg from '../../../assets/icons/avatar.png';

import { MainFooter } from '../../components/footers/MainFooter';
import { MainScreenContainer } from '../../components/containers/MainScreenContainer';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const ProfileTab = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={{ flex: 1 }}>
            <View
                style={{
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
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
            <Text style={{ color: 'gray', fontSize: 12 }}>
                {title.toUpperCase()}
            </Text>
            <TextInput style={{}} value={value} onChangeText={onChange} />
        </View>
    );
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
                <Text>Profile</Text>
                <View
                    style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.avatarWrapper}>
                        <Image style={styles.avatar} source={avatarImg} />
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        borderColor: 'lightgray',
                        borderTopWidth: 2,
                        borderBottomWidth: 2,
                    }}>
                    {<ProfileTab title={'Sessions'} />}
                    {<Separator />}
                    {<ProfileTab title={'Settings'} />}
                    {<Separator />}
                    {<ProfileTab title={'Information'} />}
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
