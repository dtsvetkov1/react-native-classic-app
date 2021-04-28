import React, { useEffect } from 'react';
import {
    StyleSheet,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { colors } from '../../constants/colors';
import { DefaultButton } from '../../components/buttons/DefaultButton';
import { text, flex, commonStyles } from '../../constants/styles';
import { Text } from '../../components/Text';

import brainImg from '../../../assets/icons/brain.png';
import labImg from '../../../assets/icons/lab1.png';
import menuImg from '../../../assets/icons/menu.png';
import avatarImg from '../../../assets/icons/avatar.png';

import { MainScreenContainer } from '../../components/containers/MainScreenContainer';
import { StatsBlock } from '../../components/statistics/StatsBlock';

import { FONTS } from '../../constants/texts';

// TODO
export function HomeScreen(props) {
    const goToExercise = () => {
        props.navigation.navigate('Exercise');
    };

    const name = 'Heather';
    const goal =
        'Your target for today is to keep a peaceful mindset\r\nand ease into the stressful day.';
    const actions = [
        {
            icon: brainImg,
            theme: 'Protocols',
            title: 'Quiet mind exercise',
            task: 'Have a peaceful and tranquil mindset',
            btn: {
                text: 'RUN',
                color: colors.states.error,
                callback: goToExercise,
            },
        },
    ];
    const specialists = [
        {
            img: brainImg,
            title: 'Therapist',
            name: 'Jeff Tarrant',
            stars: 3,
            btn: {
                text: 'CONTACT',
                callback: () => null,
            },
        },
        {
            img: brainImg,
            title: 'Therapist',
            name: 'Jeff Tarrant',
            stars: 4,
            btn: {
                text: 'BOOK',
                callback: () => null,
            },
        },
    ];

    useEffect(() => {
        // playSound();
        let subscription;

        return () => {
            subscription?.unsubscribe();
        };
        // await sound.playAsync();
        // Your sound is playing!
        // return () =>  sound?.unloadAsync();
        return () => soundP?.unloadAsync();

        // Don't forget to unload the sound from memory
        // when you are done using the Sound object
    }, []);

    return (
        <MainScreenContainer>
            <ScrollView
                style={{ flex: 1, width: '100%' }}
                contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={commonStyles.menuIcon}
                        onPress={() => {
                            props.navigation.openDrawer();
                        }}>
                        <Image style={{}} source={menuImg} />
                    </TouchableOpacity>

                    <View style={styles.avatarWrapper}>
                        <Image style={styles.avatar} source={avatarImg} />
                    </View>
                    <Text style={[styles.name, text.h3]}>{getGreeting()}!</Text>
                    <Text style={[text.h4, styles.goal]}>{goal}</Text>
                    <View style={[styles.btnsWrapper]}>
                        <DefaultButton
                            title={'MORE DETAILS'}
                            buttonStyle={styles.btn}
                            textStyle={styles.btnText}
                            onPress={() => {
                                props.navigation.navigate('Heart');
                            }}
                        />
                        <DefaultButton
                            title={'VIEW YOUR PROFILE'}
                            buttonStyle={{
                                ...styles.btn,
                                ...{
                                    backgroundColor: colors.primary.gradient1,
                                },
                            }}
                            textStyle={styles.btnText}
                            onPress={() => {
                                props.navigation.navigate('Profile');
                            }}
                        />
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: colors.primary.name,
                        width: '50%',
                        padding: 5,
                        borderRadius: 10,
                        marginTop: 20,
                        alignItems: 'center',
                    }}
                    onPress={() => props.navigation.navigate('Questionary')}>
                    <Text style={{ color: 'white' }}>Take a survey</Text>
                    {/* </View> */}
                </TouchableOpacity>

                <View style={styles.actionsBlock}>
                    <Text style={styles.subheader}>
                        What are you feeling like today?
                    </Text>
                    {actions.map((item, i) => (
                        <View style={styles.action} key={i}>
                            <View style={styles.iconWrapper}>
                                <Image
                                    style={styles.actionIcon}
                                    source={item.icon}
                                />
                            </View>
                            <View style={flex.grow}>
                                <Text style={styles.description}>
                                    {item.theme}
                                </Text>
                                <Text style={styles.subheader}>
                                    {item.title}
                                </Text>
                                <Text style={styles.description}>
                                    {item.task}
                                </Text>
                            </View>
                            <DefaultButton
                                title={item.btn.text}
                                buttonStyle={{
                                    ...styles.actionBtn,
                                    ...{ backgroundColor: item.btn.color },
                                }}
                                textStyle={styles.btnText}
                                onPress={item.btn.callback}
                            />
                        </View>
                    ))}
                </View>
                {/* <View> */}
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    style={{ marginBottom: 10 }}>
                    {
                        <StatsBlock
                            style={{ width: 120 }}
                            color={'#8a7ff3'}
                            title="Progress">
                            <View style={{ marginTop: 15 }}>
                                {/* <AnimatedCircularProgress
								style={{}}
								size={60}
								width={15}
								fill={40}
								rotation={-30}
								tintColor={colors.tertiary.seaGreen}
								backgroundColor="#6b5ecd"
							/> */}
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text
                                    style={{
                                        color: 'white',
                                        fontFamily: FONTS.MONTSERRAT_BOLD,
                                    }}>
                                    34%
                                </Text>
                                <Text style={{ color: 'white', fontSize: 10 }}>
                                    Last updated 3m
                                </Text>
                            </View>
                        </StatsBlock>
                    }
                    {
                        <StatsBlock
                            style={{ width: 120 }}
                            color={colors.primary.name}
                            title="Duration">
                            <View
                                style={{
                                    marginTop: 10,
                                    position: 'absolute',
                                    bottom: 10,
                                }}>
                                <Text
                                    style={{
                                        color: 'white',
                                        fontFamily: FONTS.MONTSERRAT_BOLD,
                                    }}>
                                    32 min
                                </Text>
                                <Text style={{ color: 'white', fontSize: 10 }}>
                                    Last updated 3d
                                </Text>
                            </View>
                        </StatsBlock>
                    }
                    {
                        <StatsBlock
                            style={{ width: 120 }}
                            color={'#ff9b94'}
                            title="Mood">
                            <View style={{ flexDirection: 'row' }}>
                                {[
                                    { height: 30, top: 20 },
                                    { height: 50, top: 10 },
                                    { height: 10, top: 20 },
                                    { height: 40, top: 10 },
                                    { height: 30, top: 15 },
                                    { height: 50, top: 10 },
                                    { height: 10, top: 40 },
                                    { height: 30, top: 20 },
                                    { height: 45, top: 10 },
                                    { height: 10, top: 35 },
                                ].map((item, index) => (
                                    <View
                                        key={index}
                                        style={{
                                            margin: 2,
                                            height: item.height,
                                            width: 3.5,
                                            borderRadius: 5,
                                            backgroundColor: `${colors.states.error}90`,
                                            top: item.top,
                                        }}
                                    />
                                ))}
                            </View>
                            <View
                                style={{
                                    marginTop: 10,
                                    position: 'absolute',
                                    bottom: 10,
                                    left: 15,
                                    alignSelf: 'flex-end',
                                }}>
                                <Text
                                    style={{
                                        color: 'white',
                                        fontFamily: FONTS.MONTSERRAT_BOLD,
                                    }}>
                                    Light
                                </Text>
                                <Text style={{ color: 'white', fontSize: 10 }}>
                                    Last updated 3d
                                </Text>
                            </View>
                        </StatsBlock>
                    }
                    {
                        <StatsBlock
                            style={{ width: 120 }}
                            color={colors.secondary.darkGreen}
                            title="Steps"
                        />
                    }
                </ScrollView>
                {/* </View> */}
                <ScrollView
                    horizontal={true}
                    style={commonStyles.fullWidth}
                    contentContainerStyle={styles.specialistsContainer}>
                    {specialists.map((item, i) => (
                        <View style={styles.specialistCard} key={i}>
                            <View style={styles.iconWrapper}>
                                <Image source={item.img} />
                            </View>
                            <View style={flex.grow}>
                                <Text style={styles.description}>
                                    {item.title}
                                </Text>
                                <Text style={styles.subheader}>
                                    {item.name}
                                </Text>
                                <Text style={flex.rowCenter}>
                                    {[0, 1, 2, 3, 4].map((num) => (
                                        <View
                                            key={num}
                                            style={styles.iconWrapper}>
                                            <Image
                                                source={
                                                    item.stars > num
                                                        ? brainImg
                                                        : labImg
                                                }
                                                style={[styles.star]}
                                                resizeMode={'cover'}
                                            />
                                        </View>
                                    ))}
                                </Text>
                            </View>
                            <DefaultButton
                                title={item.btn.text}
                                buttonStyle={styles.contactBtn}
                                textStyle={styles.contactBtnText}
                                onPress={item.btn.callback}
                            />
                        </View>
                    ))}
                </ScrollView>
            </ScrollView>
        </MainScreenContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        backgroundColor: colors.secondary.beige,
        paddingLeft: 34,
        paddingTop: 80,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    btn: {
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 20,
        backgroundColor: colors.primary.name,
        marginRight: 13,
    },
    btnText: {
        fontSize: 12,
        color: 'white',
    },
    avatarWrapper: {
        ...commonStyles.shadow,
        position: 'absolute',
        borderWidth: 4,
        borderColor: 'white',
        top: 50,
        right: 30,
        overflow: 'hidden',
        borderRadius: 35,
    },
    avatar: {
        resizeMode: 'cover',
        height: 60,
        width: 55,
    },
    goal: {
        color: colors.secondary.lightGreen,
        marginVertical: 12,
    },
    name: {
        color: colors.primary.name,
    },
    actionsBlock: {
        padding: 20,
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
    },
    action: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        borderColor: colors.secondary.beige,
        paddingVertical: 20,
        borderBottomWidth: 1,
        width: '100%',
    },
    subheader: {
        ...text.h4,
        marginBottom: 2,
        color: colors.primary.name,
    },
    actionBtn: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    description: {
        ...text.h4,
        color: colors.secondary.descrition,
    },
    actionIcon: {
        resizeMode: 'cover',
    },
    iconWrapper: {
        width: '20%',
        alignItems: 'center',
    },
    btnsWrapper: {
        flexDirection: 'row',
        marginVertical: 15,
    },
    specialistsContainer: {},
    specialistCard: {
        ...commonStyles.shadow,
        borderWidth: 0.3,
        borderColor: 'gray',
        flexDirection: 'row',
        alignItems: 'center',
        height: 80,
        marginHorizontal: 15,
        marginBottom: 30,
        width: 300,
        borderRadius: 20,
        borderRadius: 15,
    },
    starWrapper: {
        width: 30,
        height: 30,
        alignItems: 'center',
    },
    star: {
        height: 20,
        width: 20,
        resizeMode: 'cover',
    },
    contactBtn: {
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 6,
        marginRight: 20,
        paddingVertical: 4,
        borderColor: colors.tertiary.lavander,
    },
    contactBtnText: {
        ...text.h4,
        color: colors.tertiary.lavander,
    },
});
const getGreeting = () => {
    let hours = new Date().getHours();
    if (hours < 10) {
        return 'Good morning';
    }
    if (hours < 18) {
        return 'Good afternoon';
    }
    return 'Good evening';
};
