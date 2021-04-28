import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { colors } from '../../constants/colors';
import { commonStyles } from '../../constants/styles';
import { Text } from '../../components/Text';

import { MainScreenContainer } from '../../components/containers/MainScreenContainer';
import { FONTS } from '../../constants/texts';
// import { TouchableOpacity } from 'react-native-gesture-handler';

import avatarImg from '../../../assets/icons/avatar.png';

import repeatIcon from '../../../assets/icons/Edit_2.png';

const AppointmentBlock = ({
    avatar,
    repeat,
    firstName,
    lastName,
    date,
    description,
    title,
}) => {
    return (
        <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={{ width: 10, alignItems: 'center' }}>
                <View
                    style={{
                        height: 15,
                        width: 15,
                        borderRadius: 10,
                        borderColor: colors.tertiary.seaBright,
                        borderWidth: 3,
                    }}
                />
                <View
                    style={{
                        width: 2,
                        height: 60,
                        backgroundColor: 'lightgray',
                    }}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text
                    style={{
                        marginLeft: 10,
                        fontFamily: FONTS.MONTSERRAT_BOLD,
                        color: colors.tertiary.sea,
                    }}>
                    {firstName + ' '}
                    <Text style={{ color: '#444' }}>
                        {lastName} - {title}
                    </Text>{' '}
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ marginLeft: 10, color: 'gray' }}>
                        {date}
                    </Text>
                    <TouchableOpacity>
                        <Image
                            source={repeatIcon}
                            style={{
                                marginLeft: 10,
                                height: 15,
                                width: 15,
                                tintColor: 'gray',
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={{ marginLeft: 10, color: 'gray' }}>
                    {description}
                </Text>
            </View>
            <View style={{}}>
                <Image
                    style={{ borderRadius: 15, height: 30, width: 30 }}
                    source={avatarImg}
                />
            </View>
        </View>
    );
};

const appointments = [
    {
        firstName: 'John',
        lastName: 'Doe',
        title: 'General expert',
        date: '2020 12-12 12:00 EST',
        description: 'General session',
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        title: 'General expert',
        date: '2020 12-11 12:00 EST',
        description: 'Stress issues',
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        title: 'General expert',
        date: '2020 12-10 12:00 EST',
        description: 'Anger management',
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        title: 'General expert',
        date: '2020 12-08 12:00 EST',
        description: 'Anger management',
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        title: 'General expert',
        date: '2020 12-05 12:00 EST',
        description: 'Stress issues',
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        title: 'General expert',
        date: '2020 12-04 12:00 EST',
        description: 'Stress issues',
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        title: 'General expert',
        date: '2020 12-03 12:00 EST',
        description: 'General session',
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        title: 'General expert',
        date: '2020 12-02 12:00 EST',
        description: 'General session',
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        title: 'General expert',
        date: '2020 12-01 12:00 EST',
        description: 'General session',
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        title: 'General expert',
        date: '2020 12-01 12:00 EST',
        description: 'General session',
    },
];

// TODO
export function AppointmentsScreen(props) {
    const goToCongrats = () => {
        props.navigation.navigate('Congrats');
    };

    return (
        <MainScreenContainer>
            <ScrollView
                style={{ flex: 1, width: '100%' }}
                contentContainerStyle={styles.container}>
                <View
                    style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ marginVertical: 10 }}>Latest sessions</Text>
                </View>
                <View
                    style={{
                        width: '80%',
                        height: 1.5,
                        backgroundColor: 'lightgray',
                        marginBottom: 15,
                    }}
                />
                <View
                    style={{
                        borderColor: 'lightgray',
                        width: '100%',
                        paddingHorizontal: 20,
                    }}>
                    {appointments.map((item, index) => (
                        <AppointmentBlock key={index} {...item} />
                    ))}
                </View>

                <TouchableOpacity
                    style={{ width: '100%', alignItems: 'center' }}>
                    <View
                        style={{
                            alignItems: 'center',
                            width: '80%',
                            borderColor: colors.tertiary.seaBright,
                            borderWidth: 3,
                            borderRadius: 20,
                            padding: 10,
                        }}>
                        <Text style={{ color: colors.secondary.darkGreen }}>
                            Make an appointment
                        </Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </MainScreenContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingBottom: 40,
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
