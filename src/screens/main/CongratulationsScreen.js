import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
} from 'react-native';

import { DefaultButton } from '../../components/buttons/DefaultButton';
import { Previous } from '../../components/buttons/Previous';
import { ProgressBar } from '../../components/ProgressBar';
import { Text } from '../../components/Text';

import { text, flex, commonStyles } from '../../constants/styles';
import { colors } from '../../constants/colors';

import appIcon from '../../../assets/icons/main-app-icon.png';
import avatarImg from '../../../assets/icons/avatar.png';
import brainImg from '../../../assets/icons/brain.png';
import bg from '../../../assets/images/congrats-bg.png';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const progBarSize = Math.min(windowHeight * 0.35, windowWidth * 0.8) * 0.9;

export function CongratulationsScreen(props) {
    const fullName = 'Heather Rainbow';
    const progressData = [
        {
            color: '#53c4c7',
            progress: 0.75,
        },
        {
            color: colors.tertiary.peach,
            progress: 0.65,
        },
        {
            color: '#e9b7c8',
            progress: 0.25,
        },
    ];

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container}>
                <Image
                    style={styles.bgImg}
                    source={bg}
                    resizeMode={'stretch'}
                />
                <Previous
                    navigation={props.navigation}
                    imgStyle={{ tintColor: 'white' }}
                />

                <Text style={styles.headerText}>
                    {'Congratulations!\r\nYou are done.'}
                </Text>
                <View style={styles.topBlock}>
                    <View style={styles.topBlockLeft}>
                        <Image
                            style={styles.topBlockIcon}
                            source={appIcon}
                            resizeMode={'contain'}
                        />
                    </View>
                    <View style={styles.topBlockMain}>
                        <View style={styles.nameWrapper}>
                            <Text style={styles.name}>{fullName}</Text>
                            <Text style={styles.resText}>
                                Your results are here
                            </Text>
                        </View>
                        <View style={styles.avatarWrapper}>
                            <Image style={styles.avatar} source={avatarImg} />
                        </View>
                    </View>
                </View>
                <View style={styles.main}>
                    <View style={styles.mainTop}>
                        <ProgressBar
                            size={progBarSize}
                            strokeWidth={6}
                            bars={progressData}
                        />
                        <View style={flex.columnCenter}>
                            <Image
                                style={styles.brainImg}
                                source={brainImg}
                                resizeMode={'cover'}
                            />
                            <Text
                                style={[
                                    text.h3,
                                    { color: colors.tertiary.seaBright },
                                ]}>
                                89%
                            </Text>
                            <Text
                                style={[
                                    text.small,
                                    { color: colors.secondary.descrition },
                                ]}>
                                immune system
                            </Text>
                        </View>
                    </View>
                    <View style={styles.mainFooter}>
                        <View style={styles.footerRight}>
                            <Text style={styles.description}>
                                Your mind is quiet
                            </Text>
                            <Text
                                style={{
                                    color: colors.primary.name,
                                    ...text.h3,
                                }}>
                                92%
                            </Text>
                            <Text style={styles.description}>Nice work!</Text>
                        </View>
                        <DefaultButton
                            title={'TRY AGAIN'}
                            buttonStyle={styles.btn}
                            textStyle={styles.btnText}
                            onPress={() => {}}
                        />
                    </View>
                </View>
                <Text style={[text.h4, commonStyles.helper, { width: '100%' }]}>
                    {
                        'You can share your result with\n\ryour mental health care provider'
                    }
                </Text>
                <View style={styles.bot}>
                    <DefaultButton
                        title={'TELL YOUR PROVIDER'}
                        buttonStyle={styles.buttonStyle}
                        textStyle={styles.btnText}
                        onPress={() => {}}
                        gradient={[
                            colors.primary.gradient1,
                            colors.primary.gradient2,
                        ]}
                    />
                    <TouchableOpacity onPress={() => {}}>
                        <Text
                            style={[
                                text.h4,
                                {
                                    color: colors.primary.name,
                                    marginVertical: 15,
                                },
                            ]}>
                            Not Now
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: windowHeight,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    bgImg: {
        position: 'absolute',
        bottom: '40%',
        width: '100%',
    },
    headerText: {
        ...text.h3,
        textAlign: 'center',
        marginTop: 20,
        color: 'white',
    },
    topBlock: {
        justifyContent: 'center',
        width: '80%',
    },
    topBlockMain: {
        backgroundColor: 'white',
        height: 70,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        right: 0,
        borderRadius: 10,
        width: '90%',
    },
    topBlockLeft: {
        ...commonStyles.shadow,
        backgroundColor: 'white',
        left: '0%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
        borderRadius: 13,
    },
    topBlockIcon: {
        width: '60%',
        height: '100%',
    },
    name: {
        ...text.h4,
        color: colors.primary.gradient1,
    },
    resText: {
        ...text.h4,
        color: colors.primary.name,
    },
    nameWrapper: {
        height: '100%',
        left: '70%',
        width: '70%',
        justifyContent: 'center',
    },
    avatarWrapper: {
        ...commonStyles.shadow,
        borderWidth: 4,
        overflow: 'hidden',
        borderColor: 'white',
        borderRadius: 35,
        marginRight: 10,
    },
    avatar: {
        resizeMode: 'cover',
        height: 50,
        width: 50,
    },
    description: {
        ...text.h4,
        color: colors.secondary.descrition,
    },
    main: {
        ...commonStyles.shadow,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        borderRadius: 10,
        backgroundColor: 'white',
        height: '50%',
        width: '80%',
    },
    mainTop: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '70%',
    },
    mainFooter: {
        width: '85%',
        paddingVertical: 10,
        borderTopWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: colors.secondary.beige,
    },
    footerRight: {},
    brainImg: {
        tintColor: colors.tertiary.seaGreen,
        width: 30,
        height: 30,
    },
    btn: {
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 20,
        backgroundColor: colors.primary.name,
    },
    buttonStyle: {
        width: '70%',
        height: 60,
        borderRadius: 20,
    },
    btnText: {
        fontSize: 12,
        color: 'white',
    },
    bot: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#fff',
        height: 100,
        width: '100%',
    },
});
